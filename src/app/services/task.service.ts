import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://api.freeprojectapi.com/api/GoalTracker/";

  getAllTasks(userId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + "getAllTasks?userId=" + userId);
  }

  createTask(obj: TaskModel): Observable<any> {
    debugger
    return this.http.post<any>(this.apiUrl + "createTask", obj);
  }
}
