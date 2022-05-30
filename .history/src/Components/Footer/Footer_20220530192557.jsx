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
      
      <div className="List">
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
        div.C
    </div>
  )
}

export default Footer