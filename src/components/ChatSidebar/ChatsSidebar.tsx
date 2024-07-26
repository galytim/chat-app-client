import "./ChatSidebar.scss";
import React, { useEffect, useState } from "react";
import { IChatData } from "../../interfaces/chat-data";
import ChatShortcut from "../ChatShortcut/ChatShortcut";
import { IChatShortcut } from "../../interfaces/chat-shortcut";
import ChatService from "../../services/Chat.service";
const ChatsSidebar = () => {
  const [chatsShortcuts, setChatsShortcuts] = useState<IChatShortcut[]>([]);

  async function fetchShortcuts() {
    try {
      const response = ChatService.getChatsShortcuts();
      setChatsShortcuts(response);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  }

  useEffect(() => {
    fetchShortcuts();
  }, []);
  return (
    <div className="ChatSidebar">
      {chatsShortcuts.map((chatShortcut: IChatShortcut) =>
        <ChatShortcut chatShortcut={chatShortcut} key={chatShortcut.chatId}/>
      )}
    </div>
  );
};

export default ChatsSidebar;
