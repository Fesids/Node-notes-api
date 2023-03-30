import { useEffect, useState } from "react"
import axios from 'axios'
import { INote, Note } from "../components/Note"
import { NoteList } from "../components/NoteList"
export const Notes = () =>{
    const [notes, setNotes] = useState<Array<INote>>()
    const getNotes = () =>{
        axios.get("api/notes/all")
        .then(resp => resp.data)
        .then(setNotes)
    }
    console.log(notes)
    useEffect(()=>{
        getNotes()
    }, [notes])
    return(
        <div className="notes">
            <h2>Notes page</h2>
            {notes?.map(note => <Note {...note}/>)}
        </div>
    )
}