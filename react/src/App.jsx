import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import CustomerList from './components/CustomerList'
import Update from './components/Update'
import './memdb.js';
import { getAll } from "./memdb.js";
// import customerlist from './assets/list.json'

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: '',
    email: '',
    pass: ''
  });
  const [customerlist, setCustomerlist] = useState([]);
  const getCustomerList = function(){
    setCustomerlist(getAll);
  };
  useEffect(() => {
    const fetchData = async () => {
        try {
            getCustomerList();
        } catch (error) {
            console.error('Error fetching socks:', error);
        }
    };

    fetchData();
}, []);
  return (
    <>
      <div className='container'>
        <div className='card-contain'>
          <CustomerList data={customerlist}  setSelectedCustomer={setSelectedCustomer}/>
        </div>
        <div className='card-contain'>
          <Update customer={selectedCustomer}/>
        </div>
      </div>
    </>
  )
}

export default App
