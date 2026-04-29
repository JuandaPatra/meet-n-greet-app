"use client";

import { DrawerDialogDemo } from "@/components/Drawer";
import ListCardMember from "@/components/ListCardMember";
import ConfirmationPopup from "@/components/Popup/confirmation";
import Seachrbar from "@/components/Searchbar/seachbar";
import { Member } from "@/data/member";
import { SessionState } from "@/hooks/member-session/reducer";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

export type MemberForm = {
  id: number;
  slug: string;
  name: string;
  aliases: string[];
  sessions: TicketSessionForm[];
};

type TicketSessionForm = {
  lane: number;
  memberId: number;
  scheduleId: number;
  session: number;
  tickets: number;
  time: string;
};

export default function MngPage() {
  const selectedMembers = useStore((state) => state.selectedMembers);
  const addMember = useStore((state) => state.addMember);
  const updateTickets = useStore((state) => state.updateTickets);
  const removeMember = useStore((state) => state.removeMember);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MemberForm | null>(null);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [memberToDelete, setMemberToDelete] = useState<Member | null>(null);

  const handleSelectMember = (member: Member) => {
    const exists = selectedMembers.find((m) => m.id === member.id);
    if (exists) {
      return alert("Member already selected");
    }
    setMode("add");
    const memberWithSession = {
      ...member,
      sessions: [],
    };
    setSelectedMember(memberWithSession);
    setOpenDrawer(true);
  };

  useEffect(() => {
    console.log("perubahan pada selected member", selectedMember);
  }, [selectedMember]);

  const handleEditMember = (member: MemberForm) => {
    console.log("edit member", member);
    setMode("edit");
    const selectedMember = selectedMembers.find((m) => m.id === member.id);

    console.log("selected member edit", selectedMember);
    setSelectedMember(member);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    setSelectedMember(null);
  };

  const handleDeleteDrawer = (member: MemberForm) => {
    setMemberToDelete(member);
  };

  const confirmDelete = () => {
    if (!memberToDelete) return;
    removeMember(memberToDelete?.id);
    setMemberToDelete(null);
  };

  const submitHandler = (sessions: SessionState[]) => {
    if (!selectedMember) return;

    const newData = {
      id: selectedMember.id,
      name: selectedMember.name,
      slug : selectedMember.slug,
      aliases: selectedMember.aliases,
      sessions, // 🔥 langsung pakai dari reducer
    };

    if (mode === "edit") {
      updateTickets(selectedMember.id, sessions);
    } else {
      addMember(newData);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center ">
      <h1 className="text-2xl font-bold">Meet Page</h1>
      <Seachrbar onSelect={handleSelectMember} />

      <ListCardMember
        state={selectedMembers}
        actions={{ onEdit: handleEditMember, onDelete: handleDeleteDrawer }}
      />

      <div className="flex justify-end my-3">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => console.log("pilih member")}
        >
          Add Member
        </button>
        <DrawerDialogDemo
          state={{ isOpen: openDrawer, selectedMember, editMode: mode }}
          actions={{ onClose: handleCloseDrawer, onSubmit: submitHandler }}
        />

        {memberToDelete && (
          <ConfirmationPopup
            state={{ member: memberToDelete, message: "Delete" }}
            action={{
              onConfirm: confirmDelete,
              onCancel: () => setMemberToDelete(null),
            }}
          />
        )}
      </div>
    </div>
  );
}
