"use client";

type ConfirmationPopupProps ={
    state  : State;
    action : ActionState;
}


type ActionState= {
    onConfirm :  ()=>void
    onCancel : ()=>void
}
type State = {
    member : Member
    message : string;
}
type Member= {
  id: number
  slug: string
  name: string
  aliases: string[]
}
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
export default function ConfirmationPopup({
  state,
    action
  
} : ConfirmationPopupProps) {
  return (
    <>
      <Dialog open={!!state.member} 
      >
        <DialogTrigger asChild>
          <Button variant="outline">Tambah Member</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{state.message}</DialogTitle>
            <DialogDescription>
            Apakah anda yakin menghapus Sesi ini  
            </DialogDescription>
            <Button onClick={action.onConfirm}>Ok</Button>
            <Button onClick={action.onCancel}>Cancel</Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
