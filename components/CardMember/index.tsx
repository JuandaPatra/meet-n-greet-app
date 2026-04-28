type ScheduleItem = {
  id: number;
  session: number;
  lane: number;
  time: string;
  tickets: number;
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function CardMember({ data, onEdit }: { data: { id: number; name: string; aliases?: string[]; sessions: ScheduleItem[] }; onEdit: (member: { id: number; name: string; aliases?: string[]; sessions: ScheduleItem[] }) => void }) {
  const totalTickets = data.sessions.reduce((total, session) => total + session.tickets, 0);
  return (
    <div className="w-75 bg-gray-200 rounded-lg shadow-md p-4 ">
      <div className="w-full h-40 bg-gray-400 rounded-md mb-4"></div>
      <h2 className="text-lg text-black font-semibold mb-2">{data.name}</h2>
      <h5 className="text-black">{totalTickets} Tiket</h5>
      <h2 className="text-black">Sesi yang dipilih</h2>
      <div className="flex flex-col text-black">
        {
          data.sessions.filter((session) => session.tickets > 0).map((session) =>   (
            <p key={session.id + session.time + session.session + session.lane}>Sesi {session.session} ({session.tickets} tiket)</p>
          ))
        }
      </div>
      <div className="flex justify-end gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => onEdit(data)}>
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
          Delete
        </button>
      </div>
      {/* <Accordion type="single" collapsible >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black">
            Sesi yang tersedia
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {data.sessions.map((session) => (
                <div
                  key={session.id + session.time + session.session + session.lane}
                  className="flex justify-between items-center text-black border border-amber-800 p-2 rounded-md"
                >
                  {session.time} - Session {session.session} - Lane {session.lane}
                  - <span>{session.tickets}</span> +
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}
