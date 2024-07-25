import './Chat.scss';
import ChatService from '../../services/Chat.service';
import { useEffect, useState } from 'react';
import React from 'react';

const Chat = (props :any) => {
    const [chats, setChats] = useState<any[]>([]);

    return (
        <div className="Chat">
            <div>{props.chat.email}</div>
            <div>{props.chat.name}</div>

        </div>
    );
}

export default Chat;
