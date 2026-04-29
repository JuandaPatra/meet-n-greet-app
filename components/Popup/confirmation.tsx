"use client";

type ConfirmationPopupProps = {
  state: State;
  action: ActionState;
};

type ActionState = {
  onConfirm: () => void;
  onCancel: () => void;
};
type State = {
  member: Member;
  message: string;
};
type Member = {
  id: number;
  slug: string;
  name: string;
  aliases: string[];
};
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
  action,
}: ConfirmationPopupProps) {
  return (
    <>
      <Dialog
        open={!!state.member}
        onOpenChange={(isOpen) => {
          if (!isOpen) action.onCancel(); // ⬅️ ini penting
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">Tambah Member</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>{state.message}</DialogTitle>
            <DialogDescription>
              Apakah anda yakin menghapus Sesi ini
            </DialogDescription>
            <div className="flex justify-center gap-3">
              <Button className="bg-green-500 w-16" onClick={action.onConfirm}>
                Ok
              </Button>
              <Button className="bg-red-500 w-16" onClick={action.onCancel}>
                Cancel
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
