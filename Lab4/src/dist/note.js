"use strict";
exports.__esModule = true;
exports.Note = void 0;
var index_1 = require("./index");
var AppFirestoreStorage_1 = require("./AppFirestoreStorage");
var Note = /** @class */ (function () {
    function Note(id, title, text, color, date, pinned) {
        this.id = ++Note.id;
        this.title = title;
        this.text = text;
        this.color = color;
        this.date = date;
        this.pinned = pinned;
    }
    Note.prototype.saveData = function (data) {
        localStorage.setItem("notesArray", JSON.stringify(data));
    };
    Note.prototype.getData = function () {
        var notesContainer = document.getElementById("notesContainer");
        var data = (localStorage.getItem('notesArray'));
        for (var i = 0; i < data.length; i++) {
            var noteDiv = this.createNoteDiv();
            notesContainer.appendChild(noteDiv);
        }
    };
    Note.prototype.createNoteDiv = function () {
        var mainDiv = document.createElement("div");
        mainDiv.className = "mainNoteDiv";
        mainDiv.style.borderStyle = "solid";
        mainDiv.style.borderColor = "blue";
        mainDiv.style.background = this.color;
        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function () {
            mainDiv.remove();
            index_1.notesArray.splice(Note.id, 1);
            localStorage.setItem("notesArray", JSON.stringify(index_1.notesArray));
            AppFirestoreStorage_1["default"].deleteNote(this.toString());
        };
        deleteButton.className = "deleteDiv";
        deleteButton.textContent = "X";
        mainDiv.appendChild(deleteButton);
        var titleDiv = document.createElement("div");
        titleDiv.className = "noteTitleDiv";
        titleDiv.textContent = this.title;
        mainDiv.appendChild(titleDiv);
        var textDiv = document.createElement("div");
        textDiv.className = "textDiv";
        textDiv.textContent = this.text;
        mainDiv.appendChild(textDiv);
        var dateDiv = document.createElement("div");
        dateDiv.className = "dataDiv";
        dateDiv.style.color = "grey";
        dateDiv.textContent = (new Date(this.date)).toLocaleDateString();
        mainDiv.appendChild(dateDiv);
        mainDiv.innerHTML;
        return mainDiv;
    };
    Note.id = -1;
    return Note;
}());
exports.Note = Note;
