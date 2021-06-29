import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getBoards(): string {
    return 'All Boards!';
  }

  getBoard(id: string | undefined): string | undefined {
    return `Board by id ${id}!`;
  }

  createBoard(): string {
    return `Create Board!`;
  }

  updateBoard(id: string | undefined): string | undefined {
    return `Update Board!  ${id}`;
  }

  deleteBoard(id: string | undefined): string | undefined  {
    return `Delete Board!  ${id}`;
  }
}
