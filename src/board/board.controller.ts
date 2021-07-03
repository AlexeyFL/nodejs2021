import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Res,
  Body,
  UseGuards
} from '@nestjs/common';
import { Response } from 'express';
import { CreateBoardDto } from '../dto/board.dto';
import { BoardService } from './board.service';
import { Board } from '../entity/Board';
import {JwtAuthGuard} from '../auth/auth.guard'

@Controller('boards')
@UseGuards(JwtAuthGuard)
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async getBoards( @Res() res: Response) {

    const users = await this.boardService.getBoards();

    if (!users) {
      res.status(404).send('Not found!');
    }
    res.status(200).json(users.map(Board.toResponse));
  }

  @Get(':id')
  async getOne(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const board = await this.boardService.getBoard(id);
    if (!board) {
      res.status(404).send('Not found!');
    }
    res.status(200).json(Board.toResponse(board));
  }

  @Post()
  async createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @Res() res: Response
  ): Promise<void> {
    const response = await this.boardService.createUser(createBoardDto);
    res.status(201).json(Board.toResponse(response));
  }

  @Put(':id')
  updateOne(
    @Body() updateBoardDto: CreateBoardDto,
    @Param('id') id: string | undefined
  ) {
    return this.boardService.updateBoard(id, updateBoardDto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string | number, @Res() res: Response) {
    const deleted = await this.boardService.deleteBoard(id);

    if (!deleted.affected) {
      res.status(204);
    }

    res.status(200).json(null);
  }
}
