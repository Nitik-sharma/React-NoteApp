import React from 'react'
import './Note.css'
import remove from "../assest/remove-icon-png-7133.png"

let timer=500,timeOut;
function Note(props) {
    const formatedDate=(value)=>{
      if(!value)return "";
      const date=new Date(value);

      let hrs=date.getHours();
      let amPm=hrs>12?"Pm":"Am";
      hrs=hrs?hrs:"12";
      hrs=hrs>12?(hrs-=12):hrs;

      let mins=date.getMinutes();

      mins=mins<10?"0"+mins:mins;

      let day=date.getDate();

      const monthsName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

     const month=monthsName[date.getMonth()];
     return `${hrs}:${mins} ${amPm} ${day} ${month}`
      

      
    }

    const debaounce=(func)=>{
      clearTimeout(timeOut);
      timeOut=setTimeout(func,timer)
    }
const upDateText=(text,id)=>{
   debaounce(()=>props.upDateText(text,id));
}

  return (
    <div className='note' style={{backgroundColor:props.Notes.color}}>
        
        <textarea className='note-text' defaultValue={props.Notes.text} onChange={(e)=>upDateText(e.target.value,props.Notes.id)}/>
        <div className='note-footer'>
        <p className='note-time'>{formatedDate(props.Notes.time)}</p>
        <img src={remove} className='rmove-img'  onClick={()=>props.deleteNote(props.Notes.id)}/>

        </div>
    </div>
  )
}

export default Note