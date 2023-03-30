import { INote, Note } from "./Note"

export interface NoteList{
    noteList: Array<INote>
}
export const NoteList = (noteList: Array<INote>) =>{
    return(
        noteList.map(note => <Note {...note}/>)
    )
}