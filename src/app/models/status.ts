import { StatusType } from "./status-type";

export interface Status {
    id: number;
    statusType: StatusType;
    data: Date;
    comment: string;
}