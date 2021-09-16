import {notesArray} from './index'
import appFireStorage, { AppFirestoreStorage } from './AppFirestoreStorage';

export class Note {

    static id: number = -1;
    id: number;
    title: string;
    text: string;
    color: string;
    date: number;
    pinned: boolean;

    constructor(id: number, title: string, text: string, color: string, date: number, pinned: boolean) {

        this.id = ++Note.id;
        this.title = title;
        this.text = text;
        this.color = color;
        this.date = date;
        this.pinned = pinned;
    }

    saveData(data: any) {
        localStorage.setItem("notesArray", JSON.stringify(data));
    }


    getData() {
        let notesContainer = <HTMLDivElement>document.getElementById("notesContainer")
        let data: any = (localStorage.getItem('notesArray'));

        for (let i=0; i<data.length; i++) {
                let noteDiv = this.createNoteDiv();
                notesContainer.appendChild(noteDiv);
            }
    }



    createNoteDiv(){
        
        let mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.className = "mainNoteDiv"
        mainDiv.style.borderStyle = "solid";
        mainDiv.style.borderColor = "blue";
        mainDiv.style.background = this.color;

        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.className = "deleteButton"
        deleteButton.onclick = function (){
            mainDiv.remove();
            notesArray.splice(Note.id, 1);
            localStorage.setItem("notesArray", JSON.stringify(notesArray));
            appFireStorage.deleteNote(this.toString())
        };
        deleteButton.className = "deleteDiv"
        deleteButton.textContent = "X";
        mainDiv.appendChild(deleteButton);

        let titleDiv: HTMLDivElement = document.createElement("div");
        titleDiv.className = "noteTitleDiv"
        titleDiv.textContent = this.title;
        mainDiv.appendChild(titleDiv);

        let textDiv: HTMLDivElement = document.createElement("div");
        textDiv.className = "textDiv"
        textDiv.textContent = this.text;
        mainDiv.appendChild(textDiv);

        let dateDiv: HTMLDivElement = document.createElement("div");
        dateDiv.className = "dataDiv"
        dateDiv.style.color = "grey"
        dateDiv.textContent = (new Date(this.date)).toLocaleDateString();
        mainDiv.appendChild(dateDiv);


        mainDiv.innerHTML;
        return mainDiv;
        
    }
}

