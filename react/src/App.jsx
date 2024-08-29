import React, { useState, useEffect } from "react";
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerList from './components/CustomerList';
import Update from './components/Update';
import { deleteById, getAll, put, post} from "./memdb.js";

function App() {
  const blankCustomer = {
    id: '',
    name: '',
    email: '',
    pass: ''
  };
  const [selectedCustomer, setSelectedCustomer] = useState(blankCustomer);
  const [customerlist, setCustomerlist] = useState([]);
  
  const getCustomerList = function(){
    setCustomerlist(getAll());
    console.log(customerlist);
  };

  useEffect(getCustomerList, []);

  const mode = selectedCustomer.id == ''? "Add" : "Update";

  const handleInputChange = function(event){
    const {id, value} = event.target;
    const updatedSelectedCustomer = {...selectedCustomer};
    updatedSelectedCustomer[id] = value;
    setSelectedCustomer(updatedSelectedCustomer);
    console.log(selectedCustomer);
  }

  const onClickDelete = function(event){
    deleteById(selectedCustomer.id);
    setSelectedCustomer(blankCustomer);
    event.preventDefault();
  }

  const onClickSave = function(event){
    console.log('In onClickSave');
    console.log(selectedCustomer);
    if(mode == "Add"){
      post(selectedCustomer);
      setSelectedCustomer(blankCustomer);
      event.preventDefault();
    }
    else if(mode == "Update"){
      put(selectedCustomer.id, selectedCustomer);
      setSelectedCustomer(blankCustomer);
      event.preventDefault();
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
