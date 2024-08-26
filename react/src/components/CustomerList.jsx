import React from "react";

const List = (props) => {
    return(
        <div>
            <h5><strong>Customer List</strong></h5>
            <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(customer =>(
                        <tr>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.pass}</td>
                        </tr>
                    ))
                }
                
            </tbody>
            </table>
        </div>
    );
};

export default List;