import React, { FC } from "react";
import { IChatShortcut } from "../../interfaces/chat-shortcut";
import "./ChatShortcut.scss"

interface ChatShortcutProps{
  chatShortcut: IChatShortcut
}
const ChatShortcut: FC<ChatShortcutProps> = ({chatShortcut}) => {
  return (
    <div className='ChatShortcut'>
      <p>{chatShortcut.companionName}</p>
      <p>{chatShortcut.lastMessage}</p>
    </div>
  );
};

export default ChatShortcut;