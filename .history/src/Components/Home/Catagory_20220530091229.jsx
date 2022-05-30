import React from 'react';
// import Book from '../../assets/img/image 2.png'
import '../../Style/Home/Catagory.scss'

const Catagory = ()=> {
   
    
  const scroll = (direction)=>{  
    let ImgC = document.getElementById("Image");
    let far = ImgC.scrollWidth/2*direction;
    let pos = ImgC.scrollLeft + far;
    ImgC.animate( { scrollLeft: pos }, 1000)
  }


  return (
  <div className='main'>
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
        <i className="prev" onClick={scroll(-1)}>&#10094;</i>
        <div className="image-container" id='Image'>
          <div className="image">1</div>
          <div className="image">2</div>
          <div className="image">3</div>
          <div className="image">4</div>
          <div className="image">5</div>
          <div className="image">6</div>
          <div className="image">7</div>
          <div className="image">8</div>
          <div className="image">9</div>
          <div className="image">10</div>
        </div>
        <i className="next" onClick={scroll(1)}>&#10095;</i>
      </div>

{/* 
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
</div> */}


</div>




  )   
}

export default Catagory;