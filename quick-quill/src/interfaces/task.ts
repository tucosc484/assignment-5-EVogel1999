
export interface Task {
    _id?: string;
    dateCreated: Date;
    description: string;
    isComplete: boolean;
    dateCompleted?: Date;
}
