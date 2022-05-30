import React from 'react'
import '../../Style/Aktsiya/Aktsiya.scss'
import Carusel from '../Home/Carusel'
const Aktsiya = () => {
  return (
    <div>
        <div className="container p-0 mt-5" id='Aktsiya'>
         <div className="title">
             <p>Распродажа</p>
         </div>
         <Carusel/>

        </div>
    </div>
  )
}

export default Aktsiya