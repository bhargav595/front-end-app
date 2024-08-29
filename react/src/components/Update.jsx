import React, { useRef } from "react";
import '../App.css';
import '../index.css';
import '../memdb.js';
import { deleteById, getAll, put } from "../memdb.js";

const Update = (props) => {
    console.log(props.mode);
    const disableDelete = props.mode == "Add" ? true : false;
    return (
        <div>
            <h5> {props.mode} </h5>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td> <label htmlFor='name'>Name: </label> </td>
                            <td> <input type='text' id='name' value={props.customer.name} onChange={(event) => props.handleInputChange(event)} placeholder='Customer Name'></input> </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor='email'>Email: </label> </td>
                            <td> <input type='text' id='email' value={props.customer.email} onChange={(event) => props.handleInputChange(event)} placeholder='name@company.com'></input></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor='password'>Password: </label> </td>
                            <td> <input type='text' id='password' value={props.customer.password} onChange={(event) => props.handleInputChange(event)} placeholder='password'></input></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={props.onClickDelete} disabled={disableDelete}>Delete</button>
                <button onClick={props.onClickSave}>Save</button>
                <button onClick={props.onClickCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Update;