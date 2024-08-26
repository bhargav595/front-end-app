import React from "react";

const Update = () => {
    const handleDelete = () => { console.log('in handleDelete()'); };
    const handleSave = () => { console.log('in handleSave()'); };
    const handleCancel = () => { console.log('in handleCancel()'); };
    return (
        <div>
            <label for='name'>Name: </label>
            <input type='text' id='name' placeholder='Customer Name'></input><br></br>
            <label for='name'>Email: </label>
            <input type='text' id='name' placeholder='name@company.com'></input><br></br>
            <label for='name' className='box'>Password: </label>
            <input type='text' id='name' placeholder='password'></input><br></br><br></br>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default Update;