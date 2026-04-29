import { updateTicketsPayLoad } from "@/store/useStore";
import CardMember from "../CardMember";
import { MemberForm } from "@/app/mng/page";


type ListCardMemberProps ={
  state : MemberForm[];
  actions : {
    onEdit: (member: MemberForm) => void;
    onDelete: (member: MemberForm) => void;
  }
}

export default function ListCardMember({ state, actions }: ListCardMemberProps) {

  return (
    <div>
      <h2>Selected Members</h2>
      <div className="flex flex-wrap gap-4 justify-center">
          {state.map((member) => (
            
            <CardMember key={member.id} data={member}  action={{onEdit: actions.onEdit, onDelete: () => actions.onDelete(member)}} />
          ))}
        </div>

    </div>
  );
}
