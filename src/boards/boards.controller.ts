import { BoardsService } from './boards.service';
import { Controller, Get } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
        
    @Get()
    getAllBoard() { //핸들러
        return this.boardsService.getAllBoards(); //서비스에서 요청을 처리
    }
}