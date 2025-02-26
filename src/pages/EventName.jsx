import { MeetingBox } from "../components/MeetingBox";
import { Positions } from "../components/Positions";

const menuNames = [
  "Event Details",
  "Assign Coordinator/Coordinator",
  "Session Management",
  "Generate SOW",
];

export const EventName = () => {
  return (
    <div className="flex flex-col w-full border-normal px-6 py-4 overflow-auto shadow-normal bg-blue-950/30">
      {/* Title */}
      <h1 className="text-3xl font-semibold">
        Event Name
        <span className="text-xl font-medium"> (Venue Details)</span>
      </h1>

      {/* Menu */}
      <ul className="flex items-center border-normal rounded-lg my-4 w-fit">
        {menuNames.map((item, i) => (
          <li
            key={i}
            className={`px-4 py-2 border-r-2 border-pink-400 text-pink-400 ${
              item === menuNames[3] && "border-none"
            } ${item === menuNames[1] && "bg-pink-400/90 text-white"}`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Assign Coordinator section */}
      <div className="mt-1 flex gap-4">
        {/* Assign Coordinator */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-3">Assign Coordinator</h2>

          <div className="px-3 p-2 border rounded-md overflow-hidden">
            <select className="w-full bg-transparent [&>option]:bg-blue-950 ">
              <option>Select coordinator</option>
              <option value="">Arijit Singh</option>
              <option value="">John Cena</option>
              <option value="">Michale Jackson</option>
            </select>
          </div>

          <button className="text-pink-400/80 font-semibold text-sm ml-0.5 mt-1.5">
            Add New Coordinator
          </button>
        </div>

        {/* Event Name */}
        <div className="w-1/2 space-y-2">
          <h2 className="text-xl font-semibold mb-3">
            Event Name <span className="text-lg font-medium">(Venue Here)</span>
          </h2>

          <div className="flex border px-2 py-0.5 border-pink-400 rounded">
            <p className="w-1/2">
              Start: <span className="font-semibold">12-12-2023</span>
            </p>
            <p className="w-1/2">
              Ends: <span className="font-semibold">15-12-2023</span>
            </p>
          </div>

          <div className="flex border px-2 py-0.5 border-pink-400 rounded">
            <p className="w-1/2">
              Venue Address:{" "}
              <span className="font-semibold">Some Location</span>
            </p>
          </div>
        </div>
      </div>

      {/* Assign Contractor */}
      <div className="flex gap-4 mt-3.5">
        <div className="min-w-[22rem]">
          <h2 className="text-xl font-semibold mb-3">Assign Contractor</h2>
          <div className="space-y-4 shadow-normal border border-pink-400 p-3.5 rounded-xl bg-black">
            <MeetingBox />
            <MeetingBox />
            <MeetingBox />
            <MeetingBox />
            <MeetingBox />
          </div>
        </div>

        <div className="flex flex-col mt-10 w-full overflow-auto">
          <h3 className="text-lg font-semibold mb-2">Positions</h3>
          <Positions />
        </div>
      </div>

      {/* Save Button */}
      <center className="mt-4">
        <button className="bg-pink-400 rounded-xl shadow-normal px-14 py-3">
          Save Edits
        </button>
      </center>
    </div>
  );
};
