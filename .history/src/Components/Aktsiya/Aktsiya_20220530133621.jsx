
import '../../Style/Aktsiya/Aktsiya.scss'

import Slider from "react-slick";
import React, { Component } from "react";
import Book from "../../assets/img/image 2.png";
import "../../Style/Home/Catagory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Aktsiya extends Component {
  
    state = {
      slideIndex: 0,
      updateCount: 0,
    };
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
        <div className="container p-0 mt-5" id='Aktsiya'>
         <div className="title">
             <p>Распродажа</p>
         </div>
        <div className="cardWrapper">

        </div>

        </div>
    </div>
  )
}

export default Aktsiya