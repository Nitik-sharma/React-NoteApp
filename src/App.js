import SideBar from "./Component/SideBar/SideBar";
import "./App.css";
import NoteContainer from "./Component/NoteContainer/NoteContainer";
import { useEffect, useState } from "react";
function App() {
  const [Notes, setNotes] = useState(JSON.parse(localStorage.getItem("note-app"))||[]);

  // Add Notes 
  const addNotes = (color) => {
    let newNotes = [...Notes];
    newNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 80),
      text: "",
      time: Date.now(),
      color: color,
    });
    setNotes(newNotes);
  };


  // Delete Notes 

  const deleteNote = (id) => {
    const TempNote = [...Notes];
    const indx = TempNote.findIndex((item) => item.id === id);

    if (indx < 0) {
      return;
    }

    TempNote.splice(indx, 1);
    setNotes(TempNote);
  };

// Add Notes to localStorage
useEffect(()=>{
localStorage.setItem('note-app',JSON.stringify(Notes));
},[Notes])

const upDateText=(text,id)=>{
  let tempNotes=[...Notes];
 const ids=tempNotes.findIndex((item)=>item.id===id);
 if(ids<0){
  return;
 }
 tempNotes[ids].text=text;
 setNotes(tempNotes);

}
  return (
    <div className="App">
      <SideBar addNotes={addNotes} />
      <NoteContainer Notes={Notes} deleteNote={deleteNote}
      upDateText={upDateText} />
    </div>
  );
}

export default App;
