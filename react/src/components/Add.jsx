import React from "react";
import '../App.css';
import '../index.css'

const Update = (props) => {
    const handleDelete = () => { console.log('in handleDelete()'); };
    const handleSave = () => { console.log('in handleSave()');  };
    const handleCancel = () => { console.log('in handleCancel()'); };
    return (
        <div>
            <h5>Update</h5>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td> <label htmlFor='name'>Name: </label> </td>
                            <td> <input type='text' id='name' value={props.customer.name} placeholder='Customer Name'></input> </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor='email'>Email: </label> </td>
                            <td> <input type='text' id='email' value={props.customer.email} placeholder='name@company.com'></input></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor='password'>Password: </label> </td>
                            <td> <input type='text' id='password' value={props.customer.pass} placeholder='password'></input></td>
                        </tr>
                    </tbody>
                </table>
                <button className="button" onClick={handleDelete}>Delete</button>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Update;