import {IProps} from "../interfaces/IProps";

export class SendDto implements IProps {
    public readonly email: string
    public readonly code: string
}