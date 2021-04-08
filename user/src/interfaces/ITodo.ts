import {ITodoById} from "./ITodoById";

export interface ITodo extends ITodoById {
    title: string
    desc: string
    completed: boolean
    createdAt: Date
}