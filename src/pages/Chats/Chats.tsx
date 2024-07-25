import ChatsSidebar from "../../components/ChatSidebar/ChatsSidebar";
import ChatService from "../../services/Chat.service";
import { IChat } from "../../interfaces/chat";
import { useEffect, useState } from "react";
import { IChatShortcut } from "../../interfaces/chat-shortcut";
import Chat from "../../components/Chat/Chat";
import "./Chats.scss"

const Chats = () => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [shortcuts, setShortcuts] = useState<IChatShortcut[]>()
  async function fetchShortcuts() {
    try {
      const response = ChatService.getChatsShortcuts();
      setShortcuts(response);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    }
  }

  useEffect(() => {
    fetchShortcuts();
  }, []);

  return (
    <div className='container flex'>
      <ChatsSidebar />
      <Chat/>
    </div>
  );
};

export default Chats;
