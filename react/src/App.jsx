import React, { useState, useEffect } from "react";
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerList from './components/CustomerList';
import Update from './components/Update';
// import { deleteById, getAll, put, post} from "./memdb.js";
import { getAll, deleteById, post, put } from './restdb.js';

function App() {
  const blankCustomer = {
    id: -1,
    name: '',
    email: '',
    password: ''
  };
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  const [customerlist, setCustomerlist] = useState([]);
  
  // const getCustomerList = function(){
  //   setCustomerlist(getAll());
  // };

  const getCustomerList = function () {
    console.log("in getCustomers()");
    getAll(setCustomerlist);
  }

  useEffect(getCustomerList, []);

  const mode = selectedCustomer.id >= 0 ? "Update" : "Add";

  const handleInputChange = function(event){
    const {id, value} = event.target;
    const updatedSelectedCustomer = {...selectedCustomer};
    updatedSelectedCustomer[id] = value;
    setSelectedCustomer(updatedSelectedCustomer);
    console.log(selectedCustomer);
  }

  const onClickDelete = function(event){
    const postOpCallback = () => { setSelectedCustomer(blankCustomer); }
    if (selectedCustomer.id >= 0) {
    deleteById(selectedCustomer.id, postOpCallback);
    } else {
    setSelectedCustomer(blankCustomer);
    }
  }

  const onClickSave = function(event){
    console.log('In onClickSave');
    const postOpCallback = () => { setSelectedCustomer(blankCustomer); }
    if(mode == "Add"){
      post(selectedCustomer, postOpCallback);
    }
    else if(mode == "Update"){
      put(selectedCustomer, postOpCallback);
    }
  }

  const onClickCancel = function(event){
    setSelectedCustomer(blankCustomer);
    event.preventDefault();
  }

  return (
    <>
      <div className='container'>
        <div className='card-contain'>
          <CustomerList data={customerlist}  setSelectedCustomer={setSelectedCustomer}/>
        </div>
        <div className='card-contain'>
          <Update customer={selectedCustomer} mode={mode} handleInputChange={handleInputChange} onClickSave={onClickSave} onClickDelete={onClickDelete} onClickCancel={onClickCancel} />
        </div>
      </div>
    </>
  )
}

export default App
