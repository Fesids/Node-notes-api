import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { INote, Note } from "../components/Note";

export const SingleNote = () =>{
    const {id} = useParams();
    const [specificNote, setSpecific] = useState<INote | undefined>();

    const [notes, setNotes] = useState<Array<INote>>()
    const getNotes = () =>{
        axios.get("api/notes/all")
        .then(resp => resp.data)
        .then(setNotes)
    }
    console.log(notes)
    useEffect(()=>{
        
        getNotes()

        const unique= notes?.filter(note => note.id == id)
        unique?.map(note => setSpecific(note))
    }, [notes])

    
    
    /*const getSpecificPost = async (id: string | undefined) =>{
        try{
            await axios.get(`api/notes/${id}`)
            .then(resp => resp.data).then(setSpecific);
        } catch(error)
        {

        }

        
    }

    useEffect(()=>{
    
        getSpecificPost(id)
    })*/
    return(
        <div>
          <Note {...specificNote}/>

        </div>
    )
}