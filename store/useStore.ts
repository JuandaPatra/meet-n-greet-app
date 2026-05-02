import { create } from "zustand";

import { persist } from "zustand/middleware";

import { MemberForm } from "@/app/mng/page";

type FeatureKey = "mng" | "twoshot";

export type addMemberPayload = {
  id: number;
  name: string;
  slug: string;
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
  selectedMembers: Record<FeatureKey, MemberForm[]>;

  addMember: (feature: FeatureKey, member: addMemberPayload) => void;
  removeMember: (feature: FeatureKey, id: number) => void;
  updateTickets: (
    feature: FeatureKey,
    memberId: number,
    updateSessions: updateTicketsPayLoad[],
  ) => void;
  reset: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      selectedMembers: {
        mng: [],
        twoshot: [],
      },

      addMember: (feature, member) => {
        const current = get().selectedMembers[feature];
        const exists = get().selectedMembers[feature].find(
          (m) => m.id === member.id,
        );
        if (exists) return;

        set({
          selectedMembers: {
            ...get().selectedMembers,
            [feature]: [
              ...current,
              {
                id: member.id,
                name: member.name,
                slug: member.slug,
                aliases: member.aliases || [],
                sessions: member.sessions,
              },
            ],
          },
        });
      },

      removeMember: (feature, memberId) =>
        set((state) => ({
          selectedMembers: {
            ...state.selectedMembers,
            [feature]: state.selectedMembers[feature].filter(
              (m) => m.id !== memberId,
            ),
          },
        })),

      updateTickets: (feature, memberId, updateSessions) =>
        set((state) => ({
          selectedMembers: {
            ...state.selectedMembers,
            [feature]: state.selectedMembers[feature].map((m) => {
              if (m.id !== memberId) return m;

              return {
                ...m,
                sessions: updateSessions,
              };
            }),
          },
        })),
      reset: () =>
        set(() => ({
          selectedMembers: {
            mng: [],
            twoshot: [],
          },
        })),
    }),
    {
      name: "mng-storage",

      version: 2, // 🔥 naikkan versi

      migrate: (persistedState) => {
        if (typeof persistedState === "object" && persistedState !== null) {
          return {
            ...persistedState,
            selectedMembers: {
              mng: [],
              twoshot: [],
            },
          };
        }

        return {
          selectedMembers: {
            mng: [],
            twoshot: [],
          },
        };
      },
    },
  ),
);
