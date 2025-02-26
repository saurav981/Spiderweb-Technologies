import { Circle, MoveLeft, MoveRight } from "lucide-react";
import { PositionItem } from "./PositionItem";

const tableHeads = ["Position", "Time", "Info", "Quality", " "];

export const Positions = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-black/70 border border-pink-400 rounded-lg overflow-auto shadow-normal">
      <table className="h-full w-full overflow-auto">
        <thead>
          <tr className="border-b border-pink-400">
            {tableHeads.map((item, i) => (
              <th
                key={i}
                className={`text-left text-sm font-semibold py-2.5 px-5 text-nowrap ${
                  item === "Quality" && "mr-10"
                }`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        {/* Items */}
        <tbody>
          <PositionItem />
          <PositionItem />
          <PositionItem />
          <PositionItem />
          <PositionItem />
          <PositionItem />
          <PositionItem />
          <PositionItem />
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-5 px-6 py-2.5 bg-black border-t border-pink-400 w-full overflow-hidden">
        <MoveLeft />
        <Circle size={11} />
        <Circle size={16} className="text-white fill-pink-400 shadow-normal" />
        <MoveRight className="text-gray-700" />
      </div>
    </div>
  );
};
