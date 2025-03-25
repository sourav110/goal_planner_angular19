import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  apiUrl: string = "https://api.freeprojectapi.com/api/GoalTracker/";
  http = inject(HttpClient);

  constructor() { }

  ///getAllGoalsByUser?userId=1

  getAllGoalsByUser(userId: number) {
    return this.http.get(this.apiUrl + "getAllGoalsByUser?userId=" + userId);
  }

  createGoal(obj: any) {
    return this.http.post(this.apiUrl + "createGoalWithMilestones", obj);
  }
}
