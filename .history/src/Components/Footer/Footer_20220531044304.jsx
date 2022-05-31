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
    
        <ul className="navbar-nav footerNavMenu">
      <li className="nav-item active">
        <a className="nav-link" href="#">Акции </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Каталлог</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Доставка </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">О магазине</a>
      </li>
    
      <li className="nav-item">
        <a className="nav-link " href="#">Блог</a>
      </li>
    </ul> 
        </div> <div className="List">
        <ul>
            <li>Популярное</li>
            <li> Программирование</li>
            <li>Книги для детей</li>
            <li> Психология</li>
            <li> Бизнес</li>
        </ul>
        <ul>
            <li>Информация</li>
            <li>  Доставка  </li>
            <li> Оплата</li>
            <li>  O магазине</li>
           
        </ul>
        <ul>
            <li>Помощь</li>
            <li>  Контакты</li>
            <li> Возврат товара</li>
            <li> Помощь покупателю</li>
           
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