import React from 'react'
import '../../Style/Catalog/Catalog.scss'
const Catalog = () => {

  listItem=[
    {id:1,text:'Книги'},
    {id:2, text:'Электронные книги'},
    {id:1,text:'Книги'},
    {id:1,text:'Книги'},
  ]
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