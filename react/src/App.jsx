import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import CustomerList from './components/CustomerList'
import Update from './components/Update'
import customerlist from './assets/list.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <CustomerList data={customerlist}/>
      </div>
      <div className='card'>
        <Update />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
