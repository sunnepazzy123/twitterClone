import React from 'react'
import "./Widget.css"
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, 
         TwitterShareButton,
        TwitterFollowButton,
      TwitterHashtagButton,
       TwitterMentionButton,
        TwitterTweetEmbed,
         TwitterMomentShare, 
         TwitterDMButton,
          TwitterVideoEmbed,
           TwitterOnAirButton } from 'react-twitter-embed';


const Widget = () => {
    return (
        <div className="widget">
            <div className="widgetInput">
                <SearchIcon className="widgetSearchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgetSingleContainer">
                <h2>what's Happening</h2>
                <TwitterTweetEmbed
                tweetId={'933354946111705097'}
                />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 400}}
                />
                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>

        </div>
    )
}

export default Widget
