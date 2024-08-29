import React, { useRef } from "react";
import '../App.css';
import '../index.css';
import '../memdb.js';
import { deleteById, getAll, put } from "../memdb.js";

const Form = (props) => {
    const handleSave = () => { 
        console.log('in handleSave()'); 
        console.log(inputName);
    };
    const handleCancel = () => { console.log('in handleCancel()'); };
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    
    return (
        <div>
            <h5>Update</h5>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td> <label htmlFor='name'>Name: </label> </td>
                            <td> <input type='text' id='name' defaultValue={props.customer.name} onChange={(event) => props.handleInputChange(event)} placeholder='Customer Name'></input> </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor='email'>Email: </label> </td>
                            <td> <input type='text' id='email' defaultValue={props.customer.email} ref={inputEmail} placeholder='name@company.com'></input></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor='password'>Password: </label> </td>
                            <td> <input type='text' id='password' defaultValue={props.customer.password} ref={inputPassword} placeholder='password'></input></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={props.onClickDelete}>Delete</button>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Form;