import { MemberForm } from "@/app/mng/page";


type ActionState = {
  onEdit: (member: MemberForm) => void;
  onDelete: (member: MemberForm) => void;
};

type DataProps = {
  data: MemberForm;
  action: ActionState;
};

export default function CardMember({ data, action }: DataProps) {
  const totalTickets = data.sessions.reduce(
    (total, session) => total + session.tickets,
    0,
  );
  return (
    <div className="w-75 bg-gray-200 rounded-lg shadow-md p-4 ">
      <div className="w-full h-40 bg-gray-400 rounded-md mb-4"></div>
      <h2 className="text-lg text-black font-semibold mb-2">{data.name}</h2>
      <h5 className="text-black">{totalTickets} Tiket</h5>
      <h2 className="text-black">Sesi yang dipilih</h2>
      <div className="flex flex-col text-black">
        {data.sessions
          .filter((session) => session.tickets > 0)
          .map((session) => (
            <p key={ data.name + session.time + session.session + session.lane}>
              Sesi {session.session} ({session.tickets} tiket)
            </p>
          ))}
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => action.onEdit(data)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => action.onDelete(data)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
