import React,{useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import "./TweetBox.css"
import db from "../firebase"


const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")


    const submitHandler = (e)=>{
        e.preventDefault()

        const postTweet = {
            displayName: "Jenny Odibo",
            text: tweetMessage,
            image: tweetImage,
            verified: true,
            username: "jennyBee",
            avatar: "https://lh3.googleusercontent.com/proxy/Eg59z0-F9-kmCxkZWm1DPXp_RHVytH6uG6zq33GUNVKLoON3oPy0xUKA2cX5Nj1Ysme7sVXPUQUCR-HXEJXlyBLlQSGQ5ukoB1TLsktNhidQobCCbokNQWo"
        }

        db.collection("posts").add(postTweet)

        setTweetMessage("")
        setTweetImage("")

    }


    return (
        <div className="tweetBox">

            <form  >
                <div className="tweetBoxInput">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/tweetPic1.jpg" />
                    <input type="text" placeholder="What's Happening" value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} />

                </div>
                    <input type="text" placeholder="Optional: Enter Image Url" className="tweetBoxImageIput" value={tweetImage}  onChange={e => setTweetImage(e.target.value)} />
                <Button variant="outlined" className="tweetButton" type="submit" onClick={submitHandler} >Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
