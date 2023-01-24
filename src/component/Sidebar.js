import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOption Icon={HomeIcon} text='Home'/>
        <SidebarOption Icon={SearchIcon} text='search'/>
        <SidebarOption Icon={NotificationsIcon} text='Notification'/>
        <SidebarOption Icon={BookmarksIcon} text='Bookmark'/>
        <SidebarOption Icon={MailOutlineIcon} text='Mail'/>
        <SidebarOption Icon={ListAltIcon} text='List'/>
        <SidebarOption Icon={PermIdentityIcon} text='Identy'/>
        <SidebarOption Icon={MoreHorizIcon} text='More'/>
        
<Button variant='outlined' className='sidebar__tweet' fullWidth> tweet</Button>
    </div>
  );
}

export default Sidebar;
