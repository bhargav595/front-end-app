import React, { useState } from "react";
import '../App.css';

const List = (props) => {
    const handleRowClick = (customer) => { console.log({customer}); props.setSelectedCustomer(customer)};
    return(
        <div>
            <h5><strong>Customer List</strong></h5>
            <table id="list" className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((customer, index) =>(
                        <tr key={index} onClick={() => handleRowClick(customer)}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.password}</td>
                        </tr>
                    ))
                }
                
            </tbody>
            </table>
        </div>
    );
};

export default List;