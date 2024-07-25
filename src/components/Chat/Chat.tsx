import "./Chat.scss";
import { useState } from "react";
import { IChatData } from "../../interfaces/chat-data";

const Chat = (props: IChatData) => {
  const [chats, setChats] = useState<IChatData[]>([]);

  return (
    <div className="Chat">
      <div>{props.chat.email}</div>
      <div>{props.chat.name}</div>
    </div>
  );
};

export default Chat;
