import { Board, BoradStatus } from './board.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title:string, description:string) {

        const board: Board = {
            id : uuid(),
            title,
            description,
            status: BoradStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

}