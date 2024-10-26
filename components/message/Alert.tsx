import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

type MessageType = "success" | "warning" | "error";

export interface MessageProps {
  type: MessageType;
  content: string;
}

export const Alert: React.FC<MessageProps> = ({ type, content }) => {
  const iconMap = {
    success: <FaCheckCircle className="inline mr-2" />,
    warning: <FaExclamationTriangle className="inline mr-2" />,
    error: <FaTimesCircle className="inline mr-2" />,
  };

  const colorMap = {
    success: "text-green-800",
    warning: "text-yellow-800",
    error: "text-red-800",
  };

  return (
    <div
      className={`p-2 rounded-lg font-serif font-bold text-center ${colorMap[type]}`}
    >
      {iconMap[type]}
      {content}
    </div>
  );
};
