import '../../Style/Footer/Footer.scss';
import React from 'react'
import Logo from '../../assets/icon/FooterLogo.svg'

const Footer = () => {
  return (
    <div className='Footer'>
      <img src={Logo} alt="" />
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
        <div className="Tel">
            <p className="TelNumber">
            +38 (071) 339-16-26
            </p>
            <button></button>
        </div>
      </div>
    </div>
  )
}

export default Footer