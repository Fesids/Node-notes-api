import axios from "axios"
import { omit } from "lodash"
import { useEffect, useRef, useState, memo} from "react"
import { useParams } from "react-router"
import { INote } from "./Note"

interface UpdateNote extends Omit<INote, "id">{

}
export const UpdateNoteForm = () =>{
    const {id} = useParams();
    const [updateNote, setUpdateNote] = useState({} as INote);
    const [newNote, setNewNote] = useState({} as UpdateNote)

    
    
    const UpdateNote = (e:any) =>{
        setUpdateNote({...updateNote, [e.target.name]:e.target.value})
    }

    const getUpdateNote = async () =>{
        const note = await axios.get(`api/notes/${id}`)
        .then(resp => resp.data)
        .then(setUpdateNote)
    }
    useEffect(()=>{
        /*const note = axios.get(`api/notes/${id}`)
        .then(resp => resp.data)
        .then(setUpdateNote)*/
        getUpdateNote()
    }, [])

    console.log(updateNote)

    const PatchUpdateNote = async(e:any) =>{
        e.preventDefault()
        await axios.patch(`api/notes/update/${id}`, updateNote);
    }



   

    return(
        <div className="update-note-form" onSubmit={(e:any)=>PatchUpdateNote(e)}>
        <form>
            <div className="form-group">
                <label htmlFor="key" className="form-label mt-3">Key</label>
                <input name="key" className="form-control" id="key" value={updateNote.key} onChange={(e:any)=>UpdateNote(e)}/>
            </div>

            <div className="form-group">
                <label htmlFor="title" className="form-label mt-3">Title</label>
                <input name="title" className="form-control" id="title" placeholder={updateNote.title}
                onChange={(e:any)=>UpdateNote(e)}/>
            </div>

            <div className="form-group">
                
                <input name="body"  type={"text"} placeholder={updateNote.body}
                onChange={(e:any)=>UpdateNote(e)}/>
            </div>

            

            <input type={"submit"} value="update" className="btn btn-success"/>
        </form>
    </div>


    )
}