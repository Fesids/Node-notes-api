import axios from "axios"
import { useEffect, useState } from "react"

interface CreateNote{
    key: string,
    title: string,
    body: string
}
export const CreateNoteForm = () =>{


    const [createNote, setCreateNote] = useState({} as CreateNote)

    const handleChange = (e:any) =>{
        const newNote = {...createNote, [e.target.name]: e.target.value}
        setCreateNote(newNote);
    }  

    console.log(createNote)

    const createNewNote = () =>{
        axios.post("api/notes/new", createNote)
   
    }

    

    return(
        <div className="create-note-form" onSubmit={createNewNote}>
            <form>
                <div className="form-group">
                    <label htmlFor="key" className="form-label mt-3">Key</label>
                    <input name="key" className="form-control" id="key" onChange={(e)=>handleChange(e) }/>
                </div>

                <div className="form-group">
                    <label htmlFor="title" className="form-label mt-3">Title</label>
                    <input name="title" className="form-control" id="title" onChange={(e)=>handleChange(e)}/>
                </div>

                <div className="form-group">
                    
                    <input name="body"  type={"text"} onChange={(e)=>handleChange(e)}/>
                </div>

                

                <input type={"submit"} value="create" className="btn btn-success"/>
            </form>
        </div>
    )
}