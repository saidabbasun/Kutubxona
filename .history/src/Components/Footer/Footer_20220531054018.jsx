import '../../Style/Footer/Footer.scss';
import React from 'react'
import Logo from '../../assets/icon/FooterLogo.svg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="GridItem  container-xl">

       <div>
       <img src={Logo} alt="" />
       </div>
      
          
        <div className="menu ">
      <p className="item ">
        <a className="link" href="#">Акции </a>
      </p>
      <p className="item">
        <a className="link" href="#">Каталлог</a>
      </p>
      <p className="item ">
        <a className="link" href="#">Доставка </a>
      </p>
      <p className="item">
        <a className="link" href="#">О магазине</a>
      </p>
    
      <p className="item">
        <a className="link " href="#">Блог</a>
      </p>
  
        </div>
      <div className="List">
        <ul>
           <a className="link " href="#"> <li>Популярное</li></a>
             <a className="link " href="#"></a><li>Книги для детей</li>
             <a className="link " href="#"></a><li> Программирование</li>
             <a className="link " href="#"></a><li> Психология</li>
             <a className="link " href="#"></a><li> Бизнес</li>
        </ul>
        <ul>
             <a className="link " href="#"></a><li>  Доставка  </li>
             <a className="link " href="#"></a><li>Информация</li>
             <a className="link " href="#"></a><li> Оплата</li>
             <a className="link " href="#"></a><li>  O магазине</li>
           
        </ul>
        <ul>
             <a className="link " href="#"></a><li>Помощь</li>
             <a className="link " href="#"></a><li>  Контакты</li>
             <a className="link " href="#"></a><li> Возврат товара</li>
             <a className="link " href="#"></a><li> Помощь покупателю</li>
           
        </ul>
        </div>
        <div className="Tel">
            <p className="TelNumber">
            +38 (071) 339-16-26
            </p>
            <a href="#"><button className='tel_Btn   '>Заказать звонок</button></a>
        </div>
        </div>
        <div className="footerBootomText">
            <p className='Text'>Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ </p>
            <p className='Text'> Условия использования | Политика конфиденциальности</p>
        </div>
    </div>
  )
}

export default Footer