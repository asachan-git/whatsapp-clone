import { Avatar } from '@material-ui/core'
import React from 'react'

import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Aniket Sachan</h3>
                <p>This is the last message and hoe ajhkfd hjdf hkjfdjkdljkdf jlkdfjl f kljfd </p>
            </div>
        </div>
    )
}

export default SidebarChat
