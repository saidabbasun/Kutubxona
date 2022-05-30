import '../../Style/Footer/Footer.scss';
import React from 'react'
import Logo from '../../assets/icon/FooterLogo.svg'

const Footer = () => {
  return (
    <div className='Footer'>
      <img src={Logo} alt="" />
      <div className="List">
        <ul>
            <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer