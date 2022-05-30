import React from 'react'
  import '../../Style/Catalog/Catalog.scss  '
const Catalog = () => {

 const  listItem=['Книги','Электронные книги','Аудиокниги','Игрушки, творчество','Книжные аксессуарые','Книжные аксессуарые','Настольные игрые','Подарки','Акции']
  return (
    <div className=' container-xl  mt-5' id='Katalog'>
        <div className="title   pt-5">
            <p>Каталог</p>
        </div>
   
          {listItem.map((text,ind)=>(
        <div className="d-grid" key={}>
      <button className='Button '><a className='btnText' href="#">{text}</a></button>
   </div>

          ))}
           
        </div>
   
  )
}

export default Catalog