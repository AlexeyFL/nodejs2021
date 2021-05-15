const uuid = require('uuid').v4;
const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

// get all boards
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards.map(Board.toResponse)).status(200);
});

// get board by id
router.route('/:id').get(async (req, res) => {
  const boardId = req.params['id'];
  const board = await boardsService.getBoard(boardId);
  if (board) {
    res.status(200).json(Board.toResponse(board));
  } else {
    res.status(404).json([]);
  }
});

// update user by id
router.route('/:id').put(async (req, res) => {
  const { body } = req;
  const boardId = req.params['id'];

  const newBoardBody = await boardsService.updateBoard({
    ...body,
    id: boardId,
  });

  res.json(Board.toResponse(newBoardBody));
});

// create new board
router.route('/').post(async (req, res) => {
  const newBoard = new Board({
    id: uuid(),
    title: req.query.title,
    columns: req.query.columns,
  });

  boardsService.addBoard(newBoard);
  res.status(201).json(newBoard.getBoard());
});

// delete board
router.route('/:id').delete(async (req, res) => {
  const boardId = req.params['id'];
  await boardsService.deleteBoard(boardId);

  res.status(204).json(null);
});

module.exports = router;
