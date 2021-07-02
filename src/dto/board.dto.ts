import {IBoardColumn} from '../interfaces/board.interface'

export class CreateBoardDto {
  id?: string | undefined;

  title?: string | undefined;

  columns?: IBoardColumn[];
}