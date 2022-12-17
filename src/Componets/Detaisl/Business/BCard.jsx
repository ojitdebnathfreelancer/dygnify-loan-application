import React from 'react';

const BCard = ({ data, i }) => {
    const {Bname, BgstNumber, BcompanyName, Baddress } = data;
    return (
        <tr className='text-center'>
            <th>{i + 1}</th>
            <td>{Bname}</td>
            <td>{BcompanyName}</td>
            <td>{BgstNumber}</td>
            <td>{Baddress}</td>
        </tr>
    );
};

export default BCard;