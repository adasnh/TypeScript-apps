import firebase from 'firebase';
import { firebaseConfig } from  './config';
import { Note } from './note';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export class AppFirestoreStorage{
   
    note: Note;

    constructor() {
    }

    async addNoteToFirebase(note: any) {
        const res = await db.collection('Notatki').add(note)
        console.log(res);
    }

    async deleteNote(id: string){
        const res = await db.collection('Notatki').doc(id).delete();
    }

    async updateNote(id: string, note: any){
        const res = await db.collection('Notatki').doc(id).update(note);
    }

    async getFromStorage() {
        const res = await db.collection('Notatki').get().then(res => ({
            data: res.docs.map((res) => ({
                data: res.data(),
                id: res.id
            }))
        }));
        const data = res.data.map((note) => ({
            ...note.data,
            id: note.id,
        }));
        return Promise.resolve(data);
    }

}

const appFireStorage = new AppFirestoreStorage;
export default  appFireStorage;