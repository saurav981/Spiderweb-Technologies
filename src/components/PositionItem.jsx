const menuList = [
  "Camera 1 (Video)",
  "9am - 7pm",
  "LP default",
  20,
  "Select Contractor",
];

export const PositionItem = () => {
  return (
    <tr>
      {menuList.map((item, i) => (
        <td
          key={i}
          className={`text-sm px-5 py-2 text-nowrap border-b border-pink-400 ${
            item === "Select Contractor" && "w-40"
          }`}
        >
          {item === "Select Contractor" ? (
            <div className="border border-pink-400 rounded-md overflow-hidden ">
              <select className="px-2 py-1 bg-black/70 h-full w-40 text-white/65">
                <option>Select Contractor</option>
                <option>Arijit Singh</option>
                <option>John Cena</option>
                <option>Sonu Nigam</option>
              </select>
            </div>
          ) : (
            item
          )}
        </td>
      ))}
    </tr>
  );
};
