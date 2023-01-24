import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css"
function TweetBox() {
    return (
        <div className='tweetBox'
        >
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://static.tnn.in/photo/msid-96423274,imgsize-1568443,updatedat-1671704515068,width-200,height-200,resizemode-75/96423274.jpg" />
                    <input placeholder='what happening?' />
                    <input className='tweetBox__imageInput'
                    placeholder='enter image URL'
                    />

                </div>
                <Button className='tweetBox__tweetButton'> tweet</Button>

            </form>

        </div>
    );
}

export default TweetBox;
