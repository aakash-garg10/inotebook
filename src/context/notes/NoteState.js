import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  // THIS IS JUST TO GET HOLD OF CONTEXTAPI
  // const s1 = {
  //     "name": "Harry",
  //     "class": "5b"
  // }
  // const [state, setState] = useState(s1);

  // const update = ()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name": "Larry",
  //             "class": "10b"
  //         })
  //     }, 2500);
  // }
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmIyNzcwOGVmZGUyMGQ3YWExMmRkIn0sImlhdCI6MTYzNjgwOTg1NX0.U1v6ryURfTYrRL9TLiXsHY3COkPqO4fMN2jhzDUMe3E",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmIyNzcwOGVmZGUyMGQ3YWExMmRkIn0sImlhdCI6MTYzNjgwOTg1NX0.U1v6ryURfTYrRL9TLiXsHY3COkPqO4fMN2jhzDUMe3E",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    console.log("Adding a new note");
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q",
      },
    });
    const json = response.json();
    console.log(json);

    // console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmIyNzcwOGVmZGUyMGQ3YWExMmRkIn0sImlhdCI6MTYzNjgwOTg1NX0.U1v6ryURfTYrRL9TLiXsHY3COkPqO4fMN2jhzDUMe3E",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    // console.log("edited response" + json);

    // this is used to create a new copy
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    //   this is used to make sure that these values are accessible by all the components inside the context
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
