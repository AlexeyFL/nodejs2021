const boards = [];

const getAllBoards = async () => boards;

const addBoard = async (boardData) => {
  const boardList = await getAllBoards();

  boardList.push(boardData);

  return boardData;
};

const getBoard = async (id) => {
  const boardList = await getAllBoards();

  return boardList.find((board) => board.id.toString() === id);
};

const updateBoard = async (board) => {
  const boardList = await getAllBoards();

  const idx = boardList.findIndex(
    (listBoard) => listBoard.id.toString() === board.id
  );

  boardList[idx] = board;

  return board;
};

const deleteBoard = async (id) => {
  const boardList = await getAllBoards();

  const idx = boardList.findIndex(
    (listBoard) => listBoard.id.toString() === id
  );

  boardList.splice(idx, 1);
};

export { getAllBoards, addBoard, getBoard, updateBoard, deleteBoard };
