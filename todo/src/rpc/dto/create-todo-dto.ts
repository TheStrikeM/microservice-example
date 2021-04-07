import {IsBoolean, IsDate, IsNumber, IsString, Max, Min} from "class-validator";
import {ITodo} from "../interfaces/ITodo";

export class CreateTodoDto implements ITodo {
    public readonly id?: number;

    @Min(6, { message: 'Должно быть минимум 6 символов' })
    @Max(30, { message: 'Должно быть максимум 30 символов' })
    @IsString({ message: 'Поле может быть только строкой' })
    public readonly title: string;

    @Min(6, { message: 'Должно быть минимум 6 символов' })
    @Max(30, { message: 'Должно быть максимум 30 символов' })
    @IsString({ message: 'Поле может быть только строкой' })
    public readonly desc: string;

    @IsBoolean({ message: 'Поле может быть только булином' })
    public readonly completed: boolean;

    @IsDate({ message: 'Поле может быть только датой.' })
    public readonly createdAt: Date;
}