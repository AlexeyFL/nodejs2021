"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Board {
    constructor({ id = uuid_1.v4(), title = "Autotest board", columns = [
        { title: "Backlog", order: 1 },
        { title: "Sprint", order: 2 },
    ], } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
    getBoard() {
        return {
            id: this.id,
            title: this.title,
            columns: this.columns,
        };
    }
    static toResponse(board) {
        const { id, title, columns } = board;
        return { id, title, columns };
    }
}
exports.default = Board;
