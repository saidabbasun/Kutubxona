
import React, { useEffect, useState }  from 'react'
import Logo  from '../../assets/icon/Logo.svg'
import Menu from '../../assets/icon/Menu.svg'
import '../../Style/Home/Header.scss'
const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset >=100)
      );
    }
  }, []);
  return (
    <div className={`header ${
      small ? "HeaderBg" : ""
    }`}>
    <nav className="navbar container-xl justify-content-around navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">
    <img src={Logo} alt="logo" />
  </a>


 
    <ul className="navbar-nav ">
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

  <form className="  searchForm">
  <i className="uil uil-search"></i> 
      <input className="form-control" type="search" placeholder=" Поиск" aria-label="search"/>
  
    </form>
    <div className='heartCart d-flex  '>
    <i className="uil uil-heart"></i>
    <div className="cart d-flex align-items-center">
    <i className="uil uil-shopping-cart"></i>
    <div className="dropdown show">
  <a  className="btn  dropdown-toggle" role='button'  id="dropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">
  2 228 грн.  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">2 228 грн.</a>
    <a className="dropdown-item" href="#">3 228 грн.</a>
    <a className="dropdown-item" href="#"> 228 грн.</a>
  </div>
</div>
</div>
    
        </div>
        <img className='menu  d-xxl-none ' src={Menu} alt="Menu" />
</nav>
</div>
   
  )
}

export default Header