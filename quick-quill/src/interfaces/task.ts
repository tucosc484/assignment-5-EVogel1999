
export interface Task {
    id: number;
    dateCreated: string;
    description: string;
    isComplete: boolean;
    dateCompleted?: string;
}
