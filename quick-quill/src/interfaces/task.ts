
export interface Task {
    id: number;
    dateCreated: Date;
    description: string;
    isComplete: boolean;
    dateCompleted?: Date;
}
