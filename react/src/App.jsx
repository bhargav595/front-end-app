import React, { useState, useEffect } from "react";
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerList from './components/CustomerList';
import Update from './components/Update';
import { deleteById, getAll } from "./memdb.js";

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
    setCustomerlist(getAll);
  };
  useEffect(() => {
    const fetchData = async () => {
        try {
            getCustomerList();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

  const onClickDelete = function(){
    console.log(selectedCustomer);
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'); 
    console.log(getAll);
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'); 
    deleteById(selectedCustomer.id);
    setCustomerlist(getAll);
  }

  return (
    <>
      <div className='container'>
        <div className='card-contain'>
          <CustomerList data={customerlist}  setSelectedCustomer={setSelectedCustomer}/>
        </div>
        <div className='card-contain'>
          <Update customer={selectedCustomer} onClickDelete={onClickDelete}/>
        </div>
      </div>
    </>
  )
}

export default App
