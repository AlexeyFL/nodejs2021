import { v4 as uuid } from 'uuid';
import { Router, Response, Request } from 'express';

import Board from './board.model';

import * as boardsService from './board.service';

const router = Router();

// get all boards
router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.getAllBoards();
  res.status(200).json(boards.map(Board.toResponse));
});

// get board by id
router.route('/:id').get(async (req, res) => {
  const boardId = req.params.id;
  const board = await boardsService.getBoard(boardId);
  if (board) {
    res.status(200).json(board);
  } else {
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

  res.json(newBoardBody);
});

// create new board
router.route('/').post(async (req, res) => {
  const newBoard = new Board({
    id: uuid(),
    title: req.body.title,
    columns: req.body.columns,
  });

  boardsService.addBoard(newBoard);
  res.status(201).json(newBoard);
});

// delete board
router.route('/:id').delete(async (req, res) => {
  const boardId = req.params.id;
  await boardsService.deleteBoard(boardId);

  res.status(204).json(null);
});

export default router;
