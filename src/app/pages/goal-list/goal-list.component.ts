import { Component, inject, OnInit } from '@angular/core';
import { IGoal } from '../../models/goal';
import { AuthService } from '../../services/auth.service';
import { GoalService } from '../../services/goal.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-list',
  imports: [DatePipe],
  templateUrl: './goal-list.component.html',
  styleUrl: './goal-list.component.css'
})
export class GoalListComponent implements OnInit {

  goalList: IGoal[] = [];
  authServiceaa = inject(AuthService);
  goalService = inject(GoalService);
  router = inject(Router);

  ngOnInit(): void {
    this.getAllGoalsByUser();
  }

  navigateToNewGoal() {
    this.router.navigateByUrl('new-goal');
  }

  getAllGoalsByUser() {
    debugger
    const userId = 1; //this.authServiceaa.loggedUserData.userId;
    this.goalService.getAllGoalsByUser(userId).subscribe((res: any) => {
      if (res) {
        this.goalList = res;
      } else {

      }
    })
  }

}
