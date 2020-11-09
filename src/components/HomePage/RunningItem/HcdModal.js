import React from 'react';

const HcdModal = (props) => {
    const {id,court,item,date} = props.view;

    return (
        <tr>
        {/* <td scope="col">{id}</td> */}
        <td scope="col">{court}</td>
        <td scope="col">{item}</td>
        <td scope="col">{date}</td>
      </tr>
    );
};

export default HcdModal;