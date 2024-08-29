import React, { useState } from "react";
import '../App.css';

const List = (props) => {
    const blankCustomer = {
        id: -1,
        name: '',
        email: '',
        password: ''
      };
    const handleRowClick = (customer) => { 
        if(highlightedRow == customer.id){
            console.log('Empty');
            setHighlightedRow(null);
            props.setSelectedCustomer(blankCustomer);
        }
        else{
            console.log(customer);
            setHighlightedRow(customer.id);
            props.setSelectedCustomer(customer);
        }
    };
    const [highlightedRow, setHighlightedRow] = useState(null);
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
                    props.data.map((customer) =>(
                        <tr key={customer.id} onClick={() => handleRowClick(customer)} style={customer.id === highlightedRow? {fontWeight:'bold'} : null}>
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