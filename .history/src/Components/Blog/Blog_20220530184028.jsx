import '../../Style/Blog/Blog.scss';
import React from 'react'

const Blog = () => {
  return (
  
         <div className="container-xl pt-5 mt-5" id='About'>
    <div className="title">
        <p>Следите за нами в социальных сетях</p>
    </div>
   
    <div className="Blog">
        <a href="#"><i class="uil uil-facebook"></i></a>
        <a href="#"><i class="uil uil-twitter"></i></a>
        <a href="#"><i class="uil uil-vk"></i></a>
        <a href="#"><i class="uil uil-instagram"></i></a>
        <a href="#"><i class="uil uil-youtube"></i></a>
    </div>
 </div>
  )
}

export default Blog