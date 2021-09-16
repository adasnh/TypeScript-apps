import { Note } from './note';
import './main.scss';
import { AppFirestoreStorage } from './AppFirestoreStorage';
import { configSaveNote } from  './configSaveNotes';


let addButton = <HTMLButtonElement>document.getElementById("addButton")
let deleteButton = <HTMLButtonElement>document.getElementById("deletediv")
let pinnedNotesContainer = <HTMLDivElement>document.getElementById("pinnedNotesContainer")
let unpinnedNotesContainer = <HTMLDivElement>document.getElementById("unpinnedNotesContainer")

let noteDiv: any = " ";
export let notesArray: Array<Note> = [];
let newAppFirestoreStorage = new AppFirestoreStorage();




window.onload = async function() {

    if(configSaveNote == "localStorage")
    {
        console.log(notesArray);
        let data: string = (localStorage.getItem('notesArray'));
        let objData = JSON.parse(data)

        for (let i=0; i<objData.length; i++) {
                let saveNote = new Note(objData[i].id, objData[i].title, objData[i].text, objData[i].color, objData[i].date, objData[i].pinned )
                let noteDiv = saveNote.createNoteDiv();
                notesArray.push(saveNote)
                console.log(notesArray);
                if (saveNote.pinned == true){
                    pinnedNotesContainer.appendChild(noteDiv);
                }
                else{
                    unpinnedNotesContainer.appendChild(noteDiv);
                }
            }
    }
    else if(configSaveNote == "firebase"){

        let objData: any = await newAppFirestoreStorage.getFromStorage();
        console.log(objData);

        for (let i=0; i<objData.length; i++) {
                let saveNote = new Note(objData[i].id, objData[i].title, objData[i].text, objData[i].color, objData[i].date, objData[i].pinned )
                let noteDiv = saveNote.createNoteDiv();
                if (saveNote.pinned == true){
                    pinnedNotesContainer.appendChild(noteDiv);
                }
                else{
                    unpinnedNotesContainer.appendChild(noteDiv);
                }
            }
    }
}



//deleteButton.addEventListener('click', async() =>  {
 //   notesArray.slice(Note.id, 1);
//console.log("Czy cos tu widac?");
//});

addButton.addEventListener('click', async() =>  {

    var noteTitle: string = (<HTMLInputElement>document.getElementById("enterTitle")).value;
    var noteText: string = (<HTMLInputElement>document.getElementById("enterText")).value;
    var noteColor: string = (<HTMLInputElement>document.getElementById("Color")).value;
    var noteDate: number = new Date().getTime();
    var isPinned: boolean = (<HTMLInputElement>document.getElementById("pinnedNote")).checked;
    
    let newNote = new Note(0 , noteTitle, noteText, noteColor, noteDate, isPinned);
  
    let createdNote = {
        title: newNote.title,
        text: newNote.text,
        color: newNote.color,
        date: newNote.date,
        pinned: newNote.pinned
    };

    noteDiv = newNote.createNoteDiv();

    

    if (isPinned == true){
        pinnedNotesContainer.appendChild(noteDiv);
    }
    else{
        unpinnedNotesContainer.appendChild(noteDiv);
    }


    if(configSaveNote == "localStorage"){
        notesArray.push(newNote);
        newNote.saveData(notesArray);
    }
    else if(configSaveNote == "firebase"){
        newAppFirestoreStorage.addNoteToFirebase(createdNote);
    }
});
