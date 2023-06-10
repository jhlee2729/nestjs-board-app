import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
        
    @Get('/')
    getAllBoard(): Board[] { //핸들러
        return this.boardsService.getAllBoards(); //서비스에서 요청을 처리
    }

    @Post()
    createBoard(
        @Body('title') title:string,
        @Body('description') description:string
    ): Board {
        return this.boardsService.createBoard(title, description)
    }
}