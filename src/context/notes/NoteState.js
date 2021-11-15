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
  const notesInitial = [
    {
      _id: "618fc08da7f1830ce23cb1cb",
      user: "618fb27708efde20d7aa12dd",
      title: "First Note",
      description: "this is the first note of the project",
      tag: "General",
      date: "2021-11-13T13:41:33.029Z",
      __v: 0,
    },
    {
      _id: "61909f54ddcd7b477d4700b1",
      user: "618fb27708efde20d7aa12dd",
      title: "First Note",
      description: "this is the second note note of the project",
      tag: "General",
      date: "2021-11-14T05:32:04.636Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
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
    //concat returns an array whereas push updates an array
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = () => {};
  // Edit a Note
  const editNote = () => {};

  return (
    //   this is used to make sure that these values are accessible by all the components inside the context
    <NoteContext.Provider  value={{notes, addNote,deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
