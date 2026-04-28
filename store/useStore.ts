import { create } from "zustand";

import { persist } from "zustand/middleware";
import { Member } from "@/data/member";

import { scheduleByMember } from "@/data/scheduleByMember";
import { SessionState } from "@/hooks/member-session/reducer";

type ScheduleItem = {
  id: number;
  session: number;
  lane: number;
  time: string;
  tickets: number;
};

type SelectedMember = {
  id: number;
  name: string;
  aliases?: string[];
  // schedule: ScheduleItem[];
  // selectedSession?: SessionState[];
  sessions: updateTicketsPayLoad[];
};

export type addMemberPayload = {
  id: number;
  name: string;
  aliases?: string[];
  sessions: updateTicketsPayLoad[];
};

export type updateTicketsPayLoad = {
  lane: number;
  memberId: number;
  scheduleId: number;
  session: number;
  tickets: number;
  time: string;
};
type Store = {
  selectedMembers: SelectedMember[];

  addMember: (member: addMemberPayload) => void;
  removeMember: (id: number) => void;
  updateTickets: (memberId: number, updateSessions: updateTicketsPayLoad[]) => void;
  reset: () => void;
  activeMember: Member | null;
  isDrawerOpen: boolean;

  openDrawer: (member: Member) => void;
  closeDrawer: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      selectedMembers: [],

      addMember: (member) => {
        const exists = get().selectedMembers.find((m) => m.id === member.id);
        if (exists) return;

        const schedules = scheduleByMember[member.id] || [];
        set({
          selectedMembers: [
            ...get().selectedMembers,
            {
              id: member.id,
              name: member.name,
              aliases: member.aliases || [],
              sessions: member.sessions,
            },
          ],
        });
      },

      removeMember: (memberId) =>
        set({
          selectedMembers: get().selectedMembers.filter(
            (m) => m.id !== memberId,
          ),
        }),

      updateTickets: (memberId, updateSessions) =>
        set((state) => ({
          selectedMembers: state.selectedMembers.map((m) => {
            if (m.id !== memberId) return m;

            return {
              ...m,
              sessions: updateSessions, // 🔥 langsung replace
            };
          }),
        })),

      reset: () => set({ selectedMembers: [] }),
      activeMember: null,
      isDrawerOpen: false,
      openDrawer: (member) => set({ activeMember: member, isDrawerOpen: true }),
      closeDrawer: () => set({ activeMember: null, isDrawerOpen: false }),
    }),
    {
      name: "mng-storage",
    },
  ),
);
