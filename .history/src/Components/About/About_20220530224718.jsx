import React from 'react'
import '../../Style/About/Abot.scss'
const About = () => {
const listItem=[
    {id:1, Namber:35,Text:'  Филиалов по всей стране'},
    {id:1, Namber:35,Text:'  Филиалов по всей стране'},
    
]
  return (
    
           <div className="container-xl pt-5 mt-5" id='About'>
         <div className="title">
             <p>О магазине</p>
         </div>
         <div className="Wrapper">
             <p className="Namber">
                 35
             </p>
             <p className="Text">
             Филиалов по всей стране
             </p>
             <p className="Namber">
                 898
             </p>
             <p className="Text">
             Товаров в каталоге
             </p>
             <p className="Namber">
                 38659
             </p>
             <p className="Text">
             Покупателей
             </p>
             <p className="Namber">
                 72
             </p>
             <p className="Text">
             Часоа доставка по городам
             </p>
         </div>
    </div>
  )
}

export default About