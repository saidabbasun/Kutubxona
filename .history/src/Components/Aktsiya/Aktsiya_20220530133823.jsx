import React from 'react'
import '../../Style/Aktsiya/Aktsiya.scss'
import Carusel from '../Home/Carusel'
const Aktsiya = () => {
  return (
    <div>
        <div className="container-xl p-0 mt-5" id='Catagory'>
         <div className="title">
             <p>Распродажа</p>
         </div>
         <Carusel/>

        </div>
    </div>
  )
}

export default Aktsiya