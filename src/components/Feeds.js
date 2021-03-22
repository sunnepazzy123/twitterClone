import React, {useState, useEffect} from 'react'
import TweetBox from "./TweetBox"
import "./Feeds.css"
import Posts from "./Posts"
import db from "../firebase"
import FlipMove from 'react-flip-move';



const Feeds = () => {

    const [posts, setPosts] = useState([])


    useEffect(()=>{

        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
            
        ))

    }, [])
    
    console.log(posts)


    return (
        <div className="feed">
            {/* Header */}
            <div className="feedHeader">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />
            <FlipMove>
                {posts && posts.map(post => (
                        <Posts post={post} key={post.text}/>

                ))}

            </FlipMove>

        </div>
    )
}

export default Feeds
