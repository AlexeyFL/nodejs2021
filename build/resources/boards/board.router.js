"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const express_1 = require("express");
const board_model_1 = __importDefault(require("./board.model"));
const boardsService = __importStar(require("./board.service"));
const router = express_1.Router();
// get all boards
router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAllBoards();
    res.json(boards.map(board_model_1.default.toResponse)).status(200);
});
// get board by id
router.route('/:id').get(async (req, res) => {
    const boardId = req.params.id;
    const board = await boardsService.getBoard(boardId);
    if (board) {
        res.status(200).json(board_model_1.default.toResponse(board));
    }
    else {
        res.status(404).json([]);
    }
});
// update user by id
router.route('/:id').put(async (req, res) => {
    const { body } = req;
    const boardId = req.params.id;
    const newBoardBody = await boardsService.updateBoard({
        ...body,
        id: boardId,
    });
    res.json(board_model_1.default.toResponse(newBoardBody));
});
// create new board
router.route('/').post(async (req, res) => {
    const newBoard = new board_model_1.default({
        id: uuid_1.v4(),
        title: req.query.title,
        columns: req.query.columns,
    });
    boardsService.addBoard(newBoard);
    res.status(201).json(newBoard.getBoard());
});
// delete board
router.route('/:id').delete(async (req, res) => {
    const boardId = req.params.id;
    await boardsService.deleteBoard(boardId);
    res.status(204).json(null);
});
exports.default = router;
