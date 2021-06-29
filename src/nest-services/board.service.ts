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
    return 'Create Board!';
  }

  updateBoard(): string {
    return 'Update Board!';
  }

  deleteBoard(): string {
    return 'Delete Board!';
  }
}
