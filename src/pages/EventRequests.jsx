import { MoveLeft, MoveRight, Plus, Search } from "lucide-react";
import { Rows } from "../components/Rows";

const tableHeaders = [
  "",
  "Event Name",
  "Event Start",
  "Event End",
  "Client Name",
  "Contact Info",
  "Venue",
  "City",
  "State",
  "Zip Code",
];

const event = {
  eventName: "Filled Name",
  eventStart: "Jan 12, 2024",
  eventEnd: "Jan 15, 2024",
  clientName: "John Cena",
  contactInfo: "+91 234 566 7890",
  venue: "Lorem Ipsum Dolor Sit Amet",
  city: "-",
  state: "-",
  zipCode: "-",
};

export const EventRequests = () => {
  return (
    <div className="flex flex-col justify-between w-full border-normal overflow-auto shadow-normal bg-blue-950/30">
      {/* Title */}
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-semibold">Event Requests</h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center justify-center border rounded size-7 bg-purple-600">
            <Plus />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto h-full">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              {tableHeaders.map((item, i) => (
                <th
                  key={i}
                  className={`bg-pink-400 px-6 py-4 text-left whitespace-nowrap text-[1.05rem] ${
                    item === "Event Name" && "w-48"
                  }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          {/* Rows here */}
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
          <Rows event={event} />
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 px-6 py-2.5 bg-black border-t-2 border-pink-400 w-full">
        <MoveLeft />
        <ul className="flex items-center gap-6">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li className="text-lg font-bold text-pink-300">4</li>
        </ul>
        <MoveRight className="text-gray-700" />
      </div>
    </div>
  );
};
