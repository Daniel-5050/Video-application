import React, { Component } from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';


const Table = ({columns, sortColum, onSort, data}) => {

    
    
    return (    <table className="table">

    <TableHeader
    columns ={columns}
    sortColum={sortColum}
    onSort={onSort}/>

    <TableBody columns ={ columns} data ={data}/>


    </table>
        
      );
};
 
export default Table;