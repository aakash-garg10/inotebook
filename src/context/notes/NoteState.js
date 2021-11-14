import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "Harry",
        "class": "5b"
    }
    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Larry",
                "class": "10b"
            })
        }, 2500);
    }
    return (
        // this provider is used to give access value to all the elements wtapped inside the NoteState 
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;