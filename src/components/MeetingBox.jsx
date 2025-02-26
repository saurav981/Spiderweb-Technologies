import { Star } from "lucide-react";

export const MeetingBox = () => {
  return (
    <div className="border shadow-normal border-pink-400 rounded-xl px-4 py-4 bg-black">
      <div className="flex gap-3 items-center">
        <p className="text-lg font-semibold">Meeting Room 1</p>
        <Star size={16} className="fill-pink-400" />
        <p className="text-pink-400">12 Positions</p>
      </div>

      <p className="text-xs mt-1">
        Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
      </p>
    </div>
  );
};
