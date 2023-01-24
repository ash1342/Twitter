import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import React from 'react';
import './Post.css'
function Post({ displayName, userName, verified, timestamp, text, image, avatar }) {
    return (
        <div className='post'>

            <div className='post__avatar'>
                <Avatar src='https://i.scdn.co/image/ab6761610000e5eb8e8f4609471349b4bfdbf774' />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post headerText'>
                        <h3>
                            ASHISH MAURYA <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>
                            i challege youn
                        </p>

                    </div>

                </div>
                <img src='https://media.tenor.com/HEW9mtuj2scAAAAC/man-who-made-an-entire-generation-dream-bigger-and-do-humungous%21-dr.-apj-abdul-kalam.gif' />
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small '/>
                    <PublishIcon fontSize='small'/>

                </div>

            </div>
        </div>
    );
}

export default Post;
