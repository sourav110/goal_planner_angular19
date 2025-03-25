import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewGoalComponent } from './pages/new-goal/new-goal.component';
import { GoalListComponent } from './pages/goal-list/goal-list.component';
import { TaskComponent } from './pages/task/task.component';
import { RemainderComponent } from './pages/remainder/remainder.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'new-goal',
        component: NewGoalComponent
    },
    {
        path: 'goal-list',
        component: GoalListComponent
    },
    {
        path: 'task',
        component: TaskComponent
    },
    {
        path: 'reminder',
        component: RemainderComponent
    },
];
