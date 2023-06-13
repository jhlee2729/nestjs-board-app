import { CreateBoardDTo } from './dto/create-board.dto';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
        
    @Get('/')
    getAllBoard(): Board[] { //핸들러
        return this.boardsService.getAllBoards(); //서비스에서 요청을 처리
    }

    @Post()
    createBoard(
        @Body() CreateBoardDTo: CreateBoardDTo
    ): Board {
        return this.boardsService.createBoard(CreateBoardDTo)
    }

    @Get('/:id')
    GetBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status)
    }
}