
export interface Task {
    id: number;
    dateCreated: number;
    description: string;
    isComplete: boolean;
    dateCompleted?: number;
}
