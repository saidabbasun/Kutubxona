import { render } from "@testing-library/react";
import React from "react";
// import Book from '../../assets/img/image 2.png'
import "../../Style/Home/Catagory.scss";
export default class Catagory   extends React.Component {
  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }
scroll(direction){
  let far = document.getElementById('Image').width()/2*direction;
  let pos =document.getElementById('Image').scrollLeft() + far;
  document.getElementById('Image').animate( { scrollLeft: pos }, 1000)
}
render() {
  return  <div className="main">
      {/*  <div className='mt-5 container-xl' id='Catagory'>
         <nav class="navbar navbar-expand-xl navbar-light  d-flex align-items-center ">
  <a class="navbar-brand fw-bold" >Горячие поступления  </a>
 
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Фантастика</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Саморазвитие</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Детективы</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Детские</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Аудиокниги</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Другие</a>
      </li>
    </ul>
    </nav> */}

      <div className="wrapper">
        <i className="prev" onClick={this.scroll.bind(null,-1)}>
        <i class="uil uil-angle-left-b"></i>
        </i>
        <div className="image-container" id="Card">
         
        </div>
        <i className="next"onClick={this.scroll.bind(null,1)}>
        <i class="uil uil-angle-right-b"></i>
        </i>
      </div>

      {/* 
   */}
    </div>


}
}


