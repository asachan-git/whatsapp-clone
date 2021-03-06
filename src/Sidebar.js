import React from 'react'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import DonutLarge from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'

import "./Sidebar.css"
import SidebarChat from "./SidebarChat"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <ChatRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>                    
                </div>      
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start a new chat"/>
                </div>
            </div>

            <div className="sidebar__chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>
        </div>
    )
}

export default Sidebar
