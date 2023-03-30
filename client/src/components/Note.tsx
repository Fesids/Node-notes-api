import axios from "axios"
import { Link } from "react-router-dom"

export interface INote{
    id: string,
    key: string,
    title: string,
    body: string
}
export const Note = ({id,key, title, body}:INote) =>{

    const deleteNote = async (id:string, e:any) =>{
        e.preventDefault();
        try{
            await axios.delete(`api/notes/delete/${id}`)
        }catch(error){

        }
    }


    return(
        <div className="note">
            <h2>{title}</h2>
            <p>key : {key}</p>
            <p>{body}</p>
            <Link className="btn btn-success" to={`/notes/${id}`}>detail</Link>
            <button onClick={(e:any)=> deleteNote(id, e)} className="btn btn-danger">Delete</button>
            <Link to={`/update/${id}`} className="btn btn-primary">update</Link>
        </div>
    )

}