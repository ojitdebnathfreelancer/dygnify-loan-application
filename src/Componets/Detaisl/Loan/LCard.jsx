import React from 'react';

const LCard = ({ data, i }) => {

    const {Lamount, Linterest, Ltenure, Lyears } = data;

    return (
        <tr className='text-center'>
            <th>{i + 1}</th>
            <td>{Lamount}</td>
            <td>{Linterest}</td>
            <td>{Ltenure}</td>
            <td>{Lyears}</td>
        </tr>
    );
};

export default LCard;