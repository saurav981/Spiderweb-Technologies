import { Eye } from "lucide-react";

export const Rows = ({ event }) => {
  return (
    <tbody>
      <tr className="[&>td]:px-6 [&>td]:py-3 [&>td]:whitespace-nowrap border-b-2 border-pink-400">
        <td>
          <Eye size={20} />
        </td>
        <td>{event.eventName}</td>
        <td>{event.eventStart}</td>
        <td>{event.eventEnd}</td>
        <td>{event.clientName}</td>
        <td>{event.contactInfo}</td>
        <td>{event.venue}</td>
        <td>{event.city}</td>
        <td>{event.state}</td>
        <td>{event.zipCode}</td>
      </tr>
    </tbody>
  );
};
