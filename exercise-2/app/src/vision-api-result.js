import ImgHappy from './static/smileys/happy.png';
import ImgAngry from './static/smileys/angry.png';
import ImgConfused from './static/smileys/confused.png';
import ImgSurprised from './static/smileys/crying.png';
import ImgIll from './static/smileys/ill.png';
import ImgSad from './static/smileys/sad.png';
import ImgBored from './static/smileys/bored.png';

import React from 'react';

const isHotDog = (result) => {
    console.log(result);
    // your logic goes here
    return true;
};

export const CustomVisionResult = (props) => {
    let hotDogResult = isHotDog(props.result) ? (<h1 className="hotdog">Hotdog</h1>) : (<h1 className="not-hotgod">Not hotdog</h1>);

    return (
        <div className="vision-result">
            <div>
                <img src={props.imageSrc} alt="Capture" />
            </div>
            <button onClick={props.reset}>Reset</button>

            <div className="emoji-wrapper">
                {hotDogResult}
            </div>
        </div>
    );
}   