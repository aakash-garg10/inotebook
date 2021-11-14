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

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
