class Task {
  constructor({
    title = 'Autotest task',
    order = 0,
    description = 'Lorem ipsum',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  getTask() {
    return {
      title: this.title,
      order: this.order,
      description: this.description,
      userId: this.userId,
      boardId: this.boardId,
      columnId: this.columnId,
    };
  }

  static toResponse(task) {
    const {  title, order, description, userId, boardId, columnId } = task;
    return {  title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
