"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.notesArray = void 0;
var note_1 = require("./note");
require("./main.scss");
var AppFirestoreStorage_1 = require("./AppFirestoreStorage");
var configSaveNotes_1 = require("./configSaveNotes");
var addButton = document.getElementById("addButton");
var deleteButton = document.getElementById("deletediv");
var pinnedNotesContainer = document.getElementById("pinnedNotesContainer");
var unpinnedNotesContainer = document.getElementById("unpinnedNotesContainer");
var noteDiv = " ";
exports.notesArray = [];
var newAppFirestoreStorage = new AppFirestoreStorage_1.AppFirestoreStorage();
window.onload = function () {
    return __awaiter(this, void 0, void 0, function () {
        var data, objData, i, saveNote, noteDiv_1, objData, i, saveNote, noteDiv_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(configSaveNotes_1.configSaveNote == "localStorage")) return [3 /*break*/, 1];
                    console.log(exports.notesArray);
                    data = (localStorage.getItem('notesArray'));
                    objData = JSON.parse(data);
                    for (i = 0; i < objData.length; i++) {
                        saveNote = new note_1.Note(objData[i].id, objData[i].title, objData[i].text, objData[i].color, objData[i].date, objData[i].pinned);
                        noteDiv_1 = saveNote.createNoteDiv();
                        exports.notesArray.push(saveNote);
                        console.log(exports.notesArray);
                        if (saveNote.pinned == true) {
                            pinnedNotesContainer.appendChild(noteDiv_1);
                        }
                        else {
                            unpinnedNotesContainer.appendChild(noteDiv_1);
                        }
                    }
                    return [3 /*break*/, 3];
                case 1:
                    if (!(configSaveNotes_1.configSaveNote == "firebase")) return [3 /*break*/, 3];
                    return [4 /*yield*/, newAppFirestoreStorage.getFromStorage()];
                case 2:
                    objData = _a.sent();
                    console.log(objData);
                    for (i = 0; i < objData.length; i++) {
                        saveNote = new note_1.Note(objData[i].id, objData[i].title, objData[i].text, objData[i].color, objData[i].date, objData[i].pinned);
                        noteDiv_2 = saveNote.createNoteDiv();
                        if (saveNote.pinned == true) {
                            pinnedNotesContainer.appendChild(noteDiv_2);
                        }
                        else {
                            unpinnedNotesContainer.appendChild(noteDiv_2);
                        }
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
};
//deleteButton.addEventListener('click', async() =>  {
//   notesArray.slice(Note.id, 1);
//console.log("Czy cos tu widac?");
//});
addButton.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    var noteTitle, noteText, noteColor, noteDate, isPinned, newNote, createdNote;
    return __generator(this, function (_a) {
        noteTitle = document.getElementById("enterTitle").value;
        noteText = document.getElementById("enterText").value;
        noteColor = document.getElementById("Color").value;
        noteDate = new Date().getTime();
        isPinned = document.getElementById("pinnedNote").checked;
        newNote = new note_1.Note(0, noteTitle, noteText, noteColor, noteDate, isPinned);
        createdNote = {
            title: newNote.title,
            text: newNote.text,
            color: newNote.color,
            date: newNote.date,
            pinned: newNote.pinned
        };
        noteDiv = newNote.createNoteDiv();
        if (isPinned == true) {
            pinnedNotesContainer.appendChild(noteDiv);
        }
        else {
            unpinnedNotesContainer.appendChild(noteDiv);
        }
        if (configSaveNotes_1.configSaveNote == "localStorage") {
            exports.notesArray.push(newNote);
            newNote.saveData(exports.notesArray);
        }
        else if (configSaveNotes_1.configSaveNote == "firebase") {
            newAppFirestoreStorage.addNoteToFirebase(createdNote);
        }
        return [2 /*return*/];
    });
}); });
