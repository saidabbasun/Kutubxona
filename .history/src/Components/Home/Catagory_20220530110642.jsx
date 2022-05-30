
import React from "react";
 import Book from '../../assets/img/image 2.png'
import "../../Style/Home/Catagory.scss";
const Catagory=()=> {
const ScrollF=()=>{
const Card=document.getElementById('Card')
  alert(Card.clientWidth); 
}
  return(
     <div className='mt-5 container-xl' id='Catagory'>
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
    </nav>
<div className="main">
      <div className="wrapper">
        <i className="prev" onClick={ScrollF}>
        <i class="uil uil-angle-left-b"></i>
        </i>
        <div className="cardWrapper " id="Card">
        <div class="card" >
  <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title ">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">ПКонстантин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded m-2">В корзину</a>
    <i class="uil uil-heart"></i>
    </div>
  </div>
</div>

<div class="card">
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn rounded m-2">В корзину</a>
    <i class="uil uil-heart"></i>
    </div>
  </div>
</div>

<div class="card" >
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded m-2">В корзину</a>
    <i class="uil uil-heart"></i>
    </div>
  </div>
</div>
<div class="card" >
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded m-2">В корзину</a>
    <i class="uil uil-heart"></i>
    </div>
  </div>
</div>
<div class="card" >
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded  m-2">В корзину</a>
    <i class="uil uil-heart "></i>
    </div>
  </div>
</div>
<div class="card" >
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded m-2">В корзину</a>
    <i class="uil uil-heart"></i>
    </div>
  </div>
</div>
<div class="card" >
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded m-2">В корзину</a>
    <i class="uil uil-heart"></i>
    </div>
  </div>
</div>
<div class="card" >
  <img class="card-img-top p-4" src={Book}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">300 грн.</h5>
    <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
    <p class="card-text ">Константин Коптелов</p>
    <div className="d-flex align-items-center">
    <a href="#" class="btn  rounded  m-2">В корзину</a>
    <i class="uil uil-heart "></i>
    </div>
  </div>
</div> 
        </div>
        <i className="next">
        <i class="uil uil-angle-right-b"></i>
        </i>
      </div>
      </div>
      
    </div>

  )

}

export default Catagory;
