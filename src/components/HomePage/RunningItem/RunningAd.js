import React from 'react';

const RunningAd = 

(props) => {
            const {message} = props.runAd;
    return (

             <marquee id="marqueeText1" style={{marginTop:"10px"}}>{message}</marquee>

    );
};

export default RunningAd;