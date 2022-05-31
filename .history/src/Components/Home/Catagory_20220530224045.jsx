import "../../Style/Home/Catagory.scss";

import React from 'react'

import Carusel from "./Carusel";

const Catagory = () => {
  return (
    <div>
       <div className="mt-5 container-xl" >
          <nav class="navbar navbar-expand-xl navbar-light  d-flex align-items-center ">
            <a class="navbar-brand fw-bold">Горячие поступления </a>
  
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Фантастика
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Саморазвитие
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Детективы
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Детские
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Аудиокниги
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Другие
                </a>
              </li>
            </ul>
          </nav>
          
          <Carusel/>
         
          </div>
    </div>
  )
}

export default Catagory
