import { CreateBoardDTo } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(CreateBoardDTo: CreateBoardDTo) {

    //     const { title, description } = CreateBoardDTo;

    //     const board: Board = {
    //         id : uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);

    //     if(!found) {
    //         throw new NotFoundException(`Can't find Board With id ${id}`);
    //     }
    //     return found;
    // }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus) : Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }

}