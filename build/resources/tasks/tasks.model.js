"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Task {
    constructor({ id = uuid_1.v4(), title = 'Autotest task', order = 0, description = 'Lorem ipsum', userId = null, boardId = null, columnId = null, } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
    getTask() {
        return {
            id: this.id,
            title: this.title,
            order: this.order,
            description: this.description,
            userId: this.userId,
            boardId: this.boardId,
            columnId: this.columnId,
        };
    }
    static toResponse(task) {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return { id, title, order, description, userId, boardId, columnId };
    }
}
exports.default = Task;
