import Chat from "../../components/Chat/Chat";
import ChatService from "../../services/Chat.service";
import { useEffect, useState } from "react";
const Chats = () => {
  const [chats,setChats] = useState<any[]>([])
  async function fetchChats() {
    try {
        const response = await ChatService.getComments();
        setChats(response.data);
    } catch (error) {
        console.error('Failed to fetch chats:', error);
    }
}

useEffect(() => {
    fetchChats();
}, []); 

return (
    <div className="Chat">
        { chats.map(chat =>
          <Chat chat={chat} key={chat.id}/>
        )
           
        }
    </div>
);
}

export default Chats;
