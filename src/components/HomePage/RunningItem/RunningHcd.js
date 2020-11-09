import React from 'react';

const RunningHcd = (props) => {
        const {message} = props.runHcd;
    return (
        
             <marquee id="marqueeText1" style={{marginTop:"10px"}}>{message}</marquee>
       
    );
};

export default RunningHcd;