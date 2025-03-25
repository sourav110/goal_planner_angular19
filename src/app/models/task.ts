export interface ITaskList {
    taskId: number
    taskName: string
    frequency: string
    createdDate: string
    dueDate: string
    isCompleted: boolean
    userId: number
  }

  export class TaskModel {
    taskId: number;
    taskName: string;
    description: string;
    frequency: string;
    createdDate: Date;
    dueDate: string;
    isCompleted: boolean;
    userId: number;

    constructor() {
        this.taskId = 0;
        this.taskName = "";
        this.description = "";
        this.frequency = "";
        this.createdDate = new Date();
        this.dueDate = "";
        this.isCompleted = false;
        this.userId = 0;
    }
  }
  
  
