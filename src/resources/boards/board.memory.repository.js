const { deleteBoardTask } = require('../tasks/tasks.memory.repository');

const boards = [];
/**
 * Return all boards.
 * @returns {Array}
 */
const getAllBoards = async () => boards;
/**
 * Add board
 * @param {Object} - json.
 * @returns {Object} - json.
 */
const addBoard = async (boardData) => {
  const boardList = await getAllBoards();

  boardList.push(boardData);

  return boardData;
};
/**
 * Get board by id.
 * @param {string} - json.
 * @returns {Object} - json.
 */
const getBoard = async (id) => {
  const boardList = await getAllBoards();

  return boardList.find((board) => board.id.toString() === id);
};
/**
 * Update board.
 * @param {Object} - json.
 * @returns {Object} - json.
 */
const updateBoard = async (board) => {
  const boardList = await getAllBoards();

  const idx = boardList.findIndex(
    (listBoard) => listBoard.id.toString() === board.id
  );

  boardList[idx] = board;

  return board;
};
/**
 * Delete board.
 * @param {string}
 * @returns {Object} - json.
 */
const deleteBoard = async (id) => {
  const boardList = await getAllBoards();

  const idx = boardList.findIndex(
    (listBoard) => listBoard.id.toString() === id
  );
  /**
   * Delete board task.
   * @param {string}
   * @returns {Object} - json.
   */
  deleteBoardTask(id);
  boardList.splice(idx, 1);
};

module.exports = { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };
