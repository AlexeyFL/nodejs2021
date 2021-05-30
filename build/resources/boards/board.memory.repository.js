"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.updateBoard = exports.getBoard = exports.addBoard = exports.getAllBoards = void 0;
const boards = [];
const getAllBoards = async () => boards;
exports.getAllBoards = getAllBoards;
const addBoard = async (boardData) => {
    const boardList = await getAllBoards();
    boardList.push(boardData);
    return boardData;
};
exports.addBoard = addBoard;
const getBoard = async (id) => {
    const boardList = await getAllBoards();
    return boardList.find((board) => board.id.toString() === id);
};
exports.getBoard = getBoard;
const updateBoard = async (board) => {
    const boardList = await getAllBoards();
    const idx = boardList.findIndex((listBoard) => listBoard.id.toString() === board.id);
    boardList[idx] = board;
    return board;
};
exports.updateBoard = updateBoard;
const deleteBoard = async (id) => {
    const boardList = await getAllBoards();
    const idx = boardList.findIndex((listBoard) => listBoard.id.toString() === id);
    boardList.splice(idx, 1);
};
exports.deleteBoard = deleteBoard;
