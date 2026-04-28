"use client";

import CardMember from "@/components/CardMember";
import { DrawerDialogDemo } from "@/components/Drawer";
import ListCardMember from "@/components/ListCardMember";
import Seachrbar from "@/components/Searchbar/seachbar";
import { Member } from "@/data/member";
import { SessionState } from "@/hooks/member-session/reducer";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export default function MngPage() {
  const selectedMembers = useStore((state) => state.selectedMembers);
  const addMember = useStore((state) => state.addMember);
  const updateTickets = useStore((state) => state.updateTickets);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [mode, setMode] = useState<"add" | "edit">("add")

  const handleSelectMember = (member : Member) => {
    const exists = selectedMembers.find((m) => m.id === member.id);
    if (exists) {
      return alert("Member already selected");
    }
    setMode("add")
    console.log("add selected member", member);
    setSelectedMember(member);
    setOpenDrawer(true);
  }

  const handleEditMember = (member : Member) =>{
    console.log("edit member", member);
    setMode("edit")

    console.log("mode", mode);
    
    const selectedMember = selectedMembers.find((m) => m.id === member.id);
  

    console.log("selected member edit", selectedMember);
    setSelectedMember(member);
    setOpenDrawer(true);
  }

  const handleCloseDrawer= () =>{
    setOpenDrawer(false);
    setSelectedMember(null);
  }

  // const submitHandler = (filteredSessions: SessionState[]) =>{
  //   if(mode === "edit"){
  //     // const selectedMember = selectedMembers.find((m) => m.id === selectedMember?.id);
  //     // filteredSessions.forEach(session => { 
  //     //   updateTickets(session.memberId, session.scheduleId, session.tickets);
  //     // });
  //     console.log("update tickets",  );

  //     // updateTickets( selectedMember?.id || 0, )

      
      
  //     return;
  //   }
  //   addMember({
  //     id: selectedMember?.id || 0,
  //     name: selectedMember?.name || "",
  //     aliases: selectedMember?.aliases || [],
  //     sessions: filteredSessions.map(s => ({
  //       lane: s.lane,
  //       scheduleId: s.scheduleId,
  //       session: s.session,
  //       time: s.time,
  //       tickets: s.tickets,
  //       memberId: selectedMember?.id || 0,
  //     }))

  //   });

  // }

  const submitHandler = (sessions: SessionState[]) => {
  if (!selectedMember) return;

  const newData = {
    id: selectedMember.id,
    name: selectedMember.name,
    aliases: selectedMember.aliases,
    sessions // 🔥 langsung pakai dari reducer
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
      <Seachrbar onSelect={handleSelectMember}  />
      <ListCardMember state={selectedMembers} actions={{ onEdit: handleEditMember }} />


      <div className="flex justify-end my-3">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() =>console.log("pilih member")}>
          Add Member
        </button>
        <DrawerDialogDemo state={{ isOpen: openDrawer, selectedMember, editMode: mode }}  actions={{ onClose: handleCloseDrawer, onSubmit: submitHandler }} />

      </div>
    </div>
  );
}
