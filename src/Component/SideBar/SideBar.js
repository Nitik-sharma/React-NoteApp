import React, { useState } from 'react'
import add from "../assest/add.png"
import "./SideBar.css"
function SideBar(props) {
 
  let colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#800080', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 165, 0, 0.5)', 'rgba(128, 0, 128, 0.5)'];

  const [openColor,setOpenColor]=useState(false);

  return (
    <div className='sidebar'>
<img src={add} className='sidebar-img' onClick={()=>{setOpenColor(!openColor)}}/>
<ul className={`sidebar-list ${openColor?"sidebar-list-active":""}`}>
{
  colors.map((item,index)=>(
    <li key={index} style={{backgroundColor:item}}className='sidebar-list-item' onClick={()=>props.addNotes(item)}></li>
  ))
}
</ul>
    </div>
  )
}

export default SideBar;