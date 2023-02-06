import React from "react";
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div >
      <div class="pl-0 h-100" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link" href="/home"><h5>Mohammad ikram</h5></a>
                <hr /></li>
              
                <li class="nav-item mb-2 "><Link class="nav-link" to="/home">
                <i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></Link></li>
                <li class="nav-item ">
                    <a class="nav-link" href="#report" 
                    data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word 
                    font-weight-bold"></i> <span className="ml-3"> Reports</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" 
                    aria-expanded="false">
                       <li class="nav-item "><a class="nav-link" href="">
                       <i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item  "><a class="nav-link" href=""> 
                       <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                    <hr />
                </li>
                <li class="nav-item "><a class="nav-link " href="#analytic"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item "><a class="nav-link" href="#export"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item "><a class="nav-link" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item "><a class="nav-link" href="#flex"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item "><a class="nav-link" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a><hr /></li>
                <li class="nav-item "><a class="nav-link" href="#">Templates</a></li>
                <li class="nav-item "><a class="nav-link" href="#">Themes</a></li>
            </ul>
       </div>
   
    </div>
  );
};

export default Sidebar;
