import React from 'react'
import '../../Style/Aktsiya/Aktsiya.scss'
import Carusel from '../Home/Carusel'
import '../../Style/'
const Aktsiya = () => {
  return (
    <div>
        <div className="container-xl pt-5 mt-5" id='Aksiya'>
         <div className="title">
             <p>Распродажа</p>
         </div>
         <div className="cardWrapper">
         <Carusel/>
         </div>
        </div>
    </div>
  )
}

export default Aktsiya