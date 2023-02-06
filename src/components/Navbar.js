import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navitem navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Admin panel</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="navitem active">
                            <Link class="nav-link" to="/home">Home  </Link>
                        </li>
                        <li class="navitem">
                        <Link class="nav-link" to="//www.codeply.com">Link  </Link>
                       
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="navitem">
                        <Link class="nav-link" to="/myAlert">Alert  </Link>
                           
                        </li>
                        <li class="navitem">
                            <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="navitem">
                  <a class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="navitem">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  {/* <li class="navitem">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li> */}
                    </ul>
                </div>
       </nav>
    </div>
  )
}

export default Navbar
