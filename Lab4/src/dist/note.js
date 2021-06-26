"use strict";
exports.__esModule = true;
exports.Note = void 0;
var colors_1 = require("./colors");
var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
        this.creationDate = new Date();
        this.color = colors_1.colors.Yellow;
        this.isPinned = false;
    }
    return Note;
}());
exports.Note = Note;
