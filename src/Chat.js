import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';

import React from 'react'
// import {setState} from "react-dom"
import "./Chat.css"
import ChatMessage from './ChatMessage'

function Chat() {
    // const [input, setInput] = setState('')

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <span>last seen at...</span>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <form>
                    <input type="text" placeholder="Type a new message" />
                    <button>Button</button>
                </form>
                
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>    
        </div>
    )
}

export default Chat
