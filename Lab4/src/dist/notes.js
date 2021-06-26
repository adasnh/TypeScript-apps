"use strict";
exports.__esModule = true;
exports.Notes = void 0;
var Notes = /** @class */ (function () {
    function Notes() {
        this.noteTable = [];
    }
    Notes.prototype.AddNote = function (singleNote) {
        this.noteTable.push(singleNote);
    };
    Notes.prototype.DeleteNote = function (index) {
        this.noteTable.splice(index, 1);
    };
    return Notes;
}());
exports.Notes = Notes;
