import { updateTicketsPayLoad, useStore } from "@/store/useStore";
import CardMember from "../CardMember";
import {Member} from "@/data/member"


export default function ListCardMember({ state, actions }: { state: { id: number; name: string; sessions: updateTicketsPayLoad[] }[]; actions: { onEdit: (member: Member) => void } }) {
  const selectedMembers = useStore((state) => state.selectedMembers);
  console.log("list card member", state);

  return (
    <div>
      <h2>Selected Members</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {state.map((member) => (
            <CardMember key={member.id} data={member} onEdit={actions.onEdit} />
          ))}
        </div>

    </div>
  );
}
