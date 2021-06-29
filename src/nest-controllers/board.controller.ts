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
  getOne(@Param('id') id: string | undefined) {
    return this.boardService.getBoard(id);
  }

  @Post()
  createBoard(): string {
    return this.boardService.createBoard();
  }

  @Put(':id')
  updateOne(@Param('id') id: string | undefined) {
    return this.boardService.updateBoard(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string | undefined) {
    return this.boardService.deleteBoard(id);
  }
}
