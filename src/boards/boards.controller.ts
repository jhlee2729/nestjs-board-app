import { User } from './../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board } from './board.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
    
    // @Get('/')
    // getAllBoard(): Board[] { //핸들러
    //     return this.boardsService.getAllBoards(); //서비스에서 요청을 처리
    // }

    @Get()
    getAllBoard(): Promise<Board[]> {
        return this.boardsService.getAllBoards();
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() CreateBoardDTo: CreateBoardDTo
    // ): Board {
    //     return this.boardsService.createBoard(CreateBoardDTo)
    // }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto,
    @GetUser() user:User): Promise<Board> {
        return this.boardsService.createBoard(CreateBoardDto, user);
    }

    @Get('/:id')
    getBoardById(@Param('id') id:number) : Promise <Board> {
        return this.boardsService.getBoardById(id);
    }
    
    // @Get('/:id')
    // GetBoardById(@Param('id') id: string): Board {
    //     return this.boardsService.getBoardById(id);
    // }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
        return this.boardsService.deleteBoard(id);
    }
    
    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status)
    }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    // ) {
    //     return this.boardsService.updateBoardStatus(id, status)
    // }
}