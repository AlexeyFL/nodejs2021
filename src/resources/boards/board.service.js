const boardsRepo = require('./board.memory.repository');
const { deleteBoardTask } = require('../tasks/tasks.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();
const addBoard = (board) => boardsRepo.addBoard(board);
const getBoard = (id) => boardsRepo.getBoard(id);
const updateBoard = (board) => boardsRepo.updateBoard(board);
const deleteBoard = (id) => {
  boardsRepo.deleteBoard(id);
};

module.exports = {
  getAllBoards,
  addBoard,
  getBoard,
  updateBoard,
  deleteBoard,
  deleteBoardTask,
};
