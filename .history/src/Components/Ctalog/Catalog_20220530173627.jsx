import React from 'react'
import '../../Style/Catalog/Catalog.scss'
const Catalog = () => {

  listItem=['Книги','Электронные книги','Аудиокниги','Игрушки, творчество','Книжные аксессуарые','Книжные аксессуарые','Настольные игрые','Настольные игрые',]
  return (
    <div className=' container-xl  mt-5' id='Katalog'>
        <div className="title   pt-5">
            <p>Каталог</p>
        </div>
        <div className="d-grid">
            <button className='btn'>Книги</button>
            <button className='Btn'>Книги</button>
        </div>
    </div>
  )
}

export default Catalog