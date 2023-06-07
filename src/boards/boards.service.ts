import { Board } from './board.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
}