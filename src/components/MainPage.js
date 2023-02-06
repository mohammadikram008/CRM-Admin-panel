import React from 'react'
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
const MainPage = () => {
    
  return (
    <div>
             <div class=" flex-row" id="main">
       <div class="d-flex ">
        <Sidebar/>
        <Dashboard/>     
   </div>
  </div> 
    </div>
  )
}

export default MainPage
