import { IsNotEmpty } from 'class-validator';

export class CreateBoardDTo {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}