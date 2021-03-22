import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SideBarsOption from "./SideBarsOption"
import "./SideBars.css"

const SideBars = () => {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebarTwitterIcon" />


            <SideBarsOption active text="Home" Icon={HomeIcon} />
            <SideBarsOption text="Explore" Icon={SearchIcon} />
            <SideBarsOption text="Notifications" Icon={NotificationsNoneIcon} />
            <SideBarsOption text="Messages" Icon={MailOutlineIcon} />
            <SideBarsOption text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SideBarsOption text="Lists" Icon={ListAltIcon} />
            <SideBarsOption text="Profile" Icon={PermIdentityIcon} />
            <SideBarsOption text="More" Icon={MoreHorizIcon} />
        

            {/* Button  */}
            <Button variant="outlined" className="sidebarsTweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default SideBars
