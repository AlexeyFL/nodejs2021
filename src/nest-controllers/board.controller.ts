import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { BoardService } from '../nest-services/board.service';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getBoards(): string {
    return this.boardService.getBoards();
  }

  @Get(':id')
  findOne(@Param('id') id: string | undefined) {
    return this.boardService.getBoard(id);
  }
  /* getBoard(@Param('id') params): string | undefined {
    return this.boardService.getBoard(params.id);
  } */

  @Post()
  createBoard(): string {
    return this.boardService.createBoard();
  }

  @Put(':id')
  updateBoard(): string {
    return this.boardService.updateBoard();
  }

  @Delete(':id')
  deleteBoard(): string {
    return this.boardService.deleteBoard();
  }
}
