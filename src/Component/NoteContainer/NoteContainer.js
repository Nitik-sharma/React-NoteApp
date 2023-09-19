import React from 'react'
import Note from '../Note/Note';

import "./NoteContainer.css"
function NoteContainer(props) {
 const reverseArray=(arr)=>{
  const array=[];

  for(let i=arr.length-1;i>=0;i--){
    array.push(arr[i]);
  }
  return array;
 }

 const notes=reverseArray(props.Notes)


  
  return (
    <div className='note-container'>
      <h1 className='note-container-h1'>Note App</h1>
<div className='note-container-notes  custom-scroll'>
  {
   notes?.length>0? notes.map((item)=>(
      <Note
      key={item.id}

      Notes={item}
      deleteNote={props.deleteNote}

    upDateText={props.upDateText}  
      />
    )):<h3 className='Alert'>No Notes Added</h3>
  }

</div>
        
    </div>
  )
}

export default NoteContainer;