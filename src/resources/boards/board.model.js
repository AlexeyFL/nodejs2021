const uuid = require('uuid').v4;

class Board {
  constructor({
    id = uuid(),
    title = "Autotest board",
    columns = [
      { title: "Backlog", order: 1 },
      { title: "Sprint", order: 2 },
    ],
  } = {}) {
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

module.exports = Board;
