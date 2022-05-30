import Slider from "react-slick";
import React,{Component} from "react";
 import Book from '../../assets/img/image 2.png'
import "../../Style/Home/Catagory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  export default class Catagory extends Component{
    slider = React.createRef();
    state = {
      slideIndex: 0,
      updateCount: 0
    };
    render() {
      const settings = {
        dots: false,
      
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
       
        
        afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
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

    <div className="cardWrapper">
    <input
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={5}
        />
    <Slider className="Slide" ref={slider => (this.slider = slider)}  id="Card" {...settings}>
      {/* <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div>
      <div>
      <img class="card-img-top p-4" src={Book} alt="Card image cap"/>
      </div> */}
    

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

        </Slider>
      
        </div>
      </div>


  )

}
  }

