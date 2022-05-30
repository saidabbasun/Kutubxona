import React from 'react'
import '../../Style/Catalog/Catalog.scss'
const Catalog = () => {

 const  listItem=['Книги','Электронные книги','Аудиокниги','Игрушки, творчество','Книжные аксессуарые','Книжные аксессуарые','Настольные игрые','Подарки','Акции']
  return (
    <div className=' container-xl  mt-5' id='Katalog'>
        <div className="title   pt-5">
            <p>Каталог</p>
        </div>
        <div className="d-grid">
          {listItem.map((text,ind)=>(
   <div key={ind}>
      <button className='btn Button'><a href="#">{text}</button>
   </div>

          ))}
           
        </div>
    </div>
  )
}

export default Catalog