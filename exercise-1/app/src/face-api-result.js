import ImgHappy from './static/smileys/happy.png';
import ImgAngry from './static/smileys/angry.png';
import ImgConfused from './static/smileys/confused.png';
import ImgSurprised from './static/smileys/crying.png';
import ImgIll from './static/smileys/ill.png';
import ImgSad from './static/smileys/sad.png';
import ImgBored from './static/smileys/bored.png';

import React from 'react';

const getEmoji = (result) => {
    // your logic goes here
    return ImgAngry;
}

export const FaceApiResult = (props) => {
    let emoji = getEmoji(props.result);
   
    return (
        <div>
            <div>
                <img src={props.imageSrc} alt="Capture" />
            </div>
            <button onClick={props.reset}>Reset</button>

            <div className="emoji-wrapper">
                <img className="emoji" src={emoji} />
            </div>


        </div>
    );
}   