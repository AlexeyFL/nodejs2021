import * as boardsRepo from './board.memory.repository';

const getAllBoards = () => boardsRepo.getAllBoards();
const addBoard = (board) => boardsRepo.addBoard(board);
const getBoard = (id) => boardsRepo.getBoard(id);
const updateBoard = (board) => boardsRepo.updateBoard(board);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

export { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };
