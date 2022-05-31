import React from 'react'
import '../../Style/About/Abot.scss'
const About = () => {
const listItem=[
    {id:1, Namber:35,Text:'  Филиалов по всей стране'},
    {id:2, Namber:  898,Text:'   Товаров в каталоге'},
    {id:3, Namber: 38659,Text:' Покупателей'},
    {id:4, Namber:72,Text:'Часоа доставка по городам'},
]
  return (
    
           <div className="container-xl pt-5 mt-5" id='About'>
               <div className="title">
             <p>О магазине</p>
         </div>
         <div>
               {listItem.map((data,ind)=>(
         <div key={ind} className="Wrapper" >
         <p className="Namber">
             {data.Namber}
         </p>
         <p className="Text">
         {data.Text}
         </p>
         </div>
               ))}
           </div>

        
        
    </div>
  )
}

export default About