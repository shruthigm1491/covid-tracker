import React from 'react';
import './Table.css';
const Table = ({ countries }) => {
  return (
    <div className='table'>
      {countries.map(({ country, cases }) => {
        return (
          <tr>
            <td>{country}</td>
            <td>{cases.toLocaleString()}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Table;
