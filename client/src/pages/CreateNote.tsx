import { CreateNoteForm} from "../components/CreateNoteForm"

export const CreateNote = () =>{

    return(
        <div className="create-note">
            <h2>Create a new note</h2>
            <CreateNoteForm/>
        </div>
    )
}