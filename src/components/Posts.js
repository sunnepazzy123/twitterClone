import React, {forwardRef, fowardRef} from 'react'
import "./Posts.css"
import Avatar from '@material-ui/core/Avatar';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';



const Posts = forwardRef( ({post}, ref) => {
 const {
        displayName,
        username,
        verified,
        avatar,
        text,
        image,
    } = post
    return (
        <div className="posts" ref={ref}>
            <div className="postAvatar">
                <Avatar src={avatar} />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            {displayName} {""} 
                            <span className="postHeaderSpecial">
                                {verified && <VerifiedUserIcon className="postBadge" /> }
                                {username}
                            </span>
                        </h3>
                    </div>          
                </div>
                <div className="postHeaderDescription">
                        <p>{text}</p>
                    </div>
                    <img src={image} alt=""  />
                    <div className="postFooter">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>

            </div>
            
        </div>
    )
})

export default Posts
