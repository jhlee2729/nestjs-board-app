import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
        
    // @Get('/')
    // getAllBoard(): Board[] { //핸들러
    //     return this.boardsService.getAllBoards(); //서비스에서 요청을 처리
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() CreateBoardDTo: CreateBoardDTo
    // ): Board {
    //     return this.boardsService.createBoard(CreateBoardDTo)
    // }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id:number) : Promise <Board> {
        return this.boardsService.getBoardById(id);
    }
    
    // @Get('/:id')
    // GetBoardById(@Param('id') id: string): Board {
    //     return this.boardsService.getBoardById(id);
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    // ) {
    //     return this.boardsService.updateBoardStatus(id, status)
    // }
}