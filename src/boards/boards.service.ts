import { CreateBoardDTo } from './dto/create-board.dto';
import { Board, BoradStatus } from './board.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(CreateBoardDTo: CreateBoardDTo) {

        const { title, description } = CreateBoardDTo;

        const board: Board = {
            id : uuid(),
            title,
            description,
            status: BoradStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

}