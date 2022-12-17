import React from 'react';

const PCard = ({data, i}) => {

    const {PfirstName, PlastName,Pnumber, Pemail,Page,Paddress} = data;

    return (
        <tr className='text-center'>
            <th>{i + 1}</th>
            <td>{PfirstName}</td>
            <td>{PlastName}</td>
            <td>{Page}</td>
            <td>{Pnumber}</td>
            <td>{Pemail}</td>
            <td>{Paddress}</td>
        </tr>
    );
};

export default PCard;