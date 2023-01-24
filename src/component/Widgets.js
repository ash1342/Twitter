import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton} from 'react-twitter-embed';


import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import "./Widgets.css"
function Widgets() {
  return (

    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        < input placeholder='search Twitter' type="yext" />
      </div>
      <div className='widgets__widgetContainer'>
        
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}
/>
<TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>
<TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />

      </div>

    </div>

  );
}

export default Widgets;
