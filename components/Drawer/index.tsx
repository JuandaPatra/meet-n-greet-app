"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Action, reducer, SessionState } from "@/hooks/member-session/reducer";
import { useMemberSessionForm } from "@/hooks/member-session/useMemberSesion";
import { MemberForm } from "@/app/mng/page";

type DialogProps = {
  state : StateProps;
  actions : ActionProps
}


type StateProps ={
  isOpen : boolean;
  selectedMember : MemberForm | null;
  editMode : "add" | "edit";
}

type ActionProps = {
  onSubmit : (filteredSessions : SessionState[]) => void;
  onClose : ()=> void;

}
export function DrawerDialogDemo({ state, actions }: DialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const existingSchedules = state.selectedMember ? state.selectedMember.sessions || [] : [];

  const { session: memberSessions, dispatch: memberDispatch } = useMemberSessionForm(state.selectedMember?.id || 0, existingSchedules);
  console.log('perubahan member session', memberSessions)
  function handleSubmit(){
    const filteredSessions = memberSessions.filter(s => s.tickets > 0);
    if(filteredSessions.length=== 0) {
      return alert("Please select at least one session with tickets.");
    }
    actions.onSubmit(memberSessions);
    actions.onClose();
  }


  if (isDesktop) {
    return (
      <Dialog open={state.isOpen} >
        <DialogTrigger asChild>
          <Button variant="outline">Tambah Member</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Tambah Member</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  if(!state.selectedMember) return null;

  return (
    <Drawer open={state.isOpen} >
      <DrawerTrigger asChild>
        <Button variant="outline">Pilih Member</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            Pilih Sesi{" "}
            {state.selectedMember? `untuk ${state.selectedMember.aliases[0]?.toLocaleUpperCase() || "Unknown"}` : ""}
          </DrawerTitle>
          <DrawerDescription>
            Silahkan masukkan jumlah tiket yang sesuai dengan sesi yang dipilih.
          </DrawerDescription>
        </DrawerHeader>
        <SessionList sessions={memberSessions} dispatch={memberDispatch} />
        
        <Button type="submit" onClick={handleSubmit} className="flex justify-center">
          Save changes
        </Button>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" onClick={actions.onClose}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}



function SessionList({ sessions, dispatch }: { sessions: SessionState[]; dispatch: React.Dispatch<Action> }) {
  return(
    <div className="px-4">
      {sessions.map((session) => (
        <SesiInput key={session.scheduleId} session={session} dispatch={dispatch} />
      ))}
    </div>
  )
}

function SesiInput({ session, dispatch }: { session: SessionState; dispatch: React.Dispatch<Action> }) {


  const handleTicketMinus = () => {
    dispatch({ type: "DECREMENT", id: session.scheduleId });
  }

  const handleTicketPlus = () => {
    dispatch({ type: "INCREMENT", id: session.scheduleId });
  }

  return (
    <div className="flex justify-between mb-2">
      <p>
        Sesi {session.session}, {session.time}, Jalur {session.lane}
      </p>
      <div>
        <button className="px-3 py-1 rounded-full bg-blue-200 hover:bg-blue-400" onClick={handleTicketMinus}>
          -
        </button>
        <input 
          type="number" 
          value={session.tickets} 
          className=" w-7.5 text-center"
          onChange={(e) => dispatch({ type: "UPDATE_TICKETS", id: session.scheduleId, tickets: parseInt(e.target.value) || 0 })}
          min="0"
        />
        <button onClick={handleTicketPlus} className="px-3 py-1 rounded-xl bg-blue-200 hover:bg-blue-400">+</button>
      </div>
    </div>
  );
}
