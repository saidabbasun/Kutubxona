
import Slider from "react-slick";
import React, { Component } from "react";
import Book from "../../assets/img/image 2.png";
import "../../Style/Home/Catagory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carusel extends Component {
  
    state = {
      slideIndex: 0,
      updateCount: 0,
    };

    listItem=[
      {id:1, img: Book , title:"300 грн",bookName:"Порядок в Хаосеtext:"ПКонстантин Коптелов"}
    ]
    render() {
      const settings = {
        dots: false,
  
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
  
        afterChange: () =>
          this.setState((state) => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => this.setState({ slideIndex: next }),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

      return (
<div>
          
            <Slider
              className="Slider"
              ref={(slider) => (this.slider = slider)}
              id="Card"
              {...settings}
            >
              <div class="card Catagorycard">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title ">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">ПКонстантин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart"></i>
                  </div>
                </div>
              </div>
  
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn rounded m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart"></i>
                  </div>
                </div>
              </div>
  
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart"></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart"></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded  m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart "></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart"></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart"></i>
                  </div>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top p-4" src={Book} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">300 грн.</h5>
                  <p class="bookName mb-0 fw-bold">Порядок в Хаосе</p>
                  <p class="card-text ">Константин Коптелов</p>
                  <div className="d-flex align-items-center">
                    <a href="#" class="btn  rounded  m-2">
                      В корзину
                    </a>
                    <i class="uil uil-heart "></i>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="scrollInput">
              <input
                onChange={(e) => this.slider.slickGoTo(e.target.value)}
                value={this.state.slideIndex}
                type="range"
                min={0}
                max={7}
              />
            </div>
         </div>
       
      );
    }
  }