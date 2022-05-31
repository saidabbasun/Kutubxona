import React from 'react'
import Header from './Header'
import Slider from '../../assets/img/Слайдер.png'
import '../../Style/Home/Home.scss';
const Home = () => {
  return (
    <div >
      <Header/>
      <div className="  container-xl  row" id='Aktsiya'  >
       
        <div className="col-5">
  <div className="card-body ">
    <h1 className="card-title ">Киниги от  А до Я</h1>
    <p className="card-text">В нашем магазине можно найти книгу на любой вкус. Большой ассортимент. Приятные цены. Интересные сюжеты.</p>
    <a href="#" className="btn">Перейти в каталог</a>
  
</div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 Slider">
          <img className='Slider' src={Slider} alt="Slider" />
        </div>
      </div>


    </div>
  )
}

export default Home;