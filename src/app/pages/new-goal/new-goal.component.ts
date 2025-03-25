import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GoalService } from '../../services/goal.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-goal',
  imports: [ReactiveFormsModule],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css'
})
export class NewGoalComponent {

  goalForm: FormGroup = new FormGroup({});
  goalService = inject(GoalService);
  authService = inject(AuthService);

  constructor() {
    this.initializeGoalForm();
    this.initializeMilestoneForm();
    this.goalForm.get('userId')?.setValue(this.authService.loggedUserData.userId);
  }

  initializeGoalForm() {
    this.goalForm = new FormGroup({
      goalId: new FormControl(0),
      goalName: new FormControl(""),
      description: new FormControl(""),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      isAchieved: new FormControl(false),
      userId: new FormControl(""),
      milestones: new FormArray([])
    })
  }

  get milestoneList(): FormArray {
    return this.goalForm.get('milestones') as FormArray;
  }

  initializeMilestoneForm() {
    const newMilestone = new FormGroup({
      milestoneId: new FormControl(0),
      milestoneName: new FormControl(""),
      description: new FormControl(""),
      targetDate: new FormControl(""),
      isCompleted: new FormControl(false),
    })

    this.milestoneList.push(newMilestone);
  }

  onSaveGoal() {
    debugger
    const formValue = this.goalForm.value;
    this.goalService.createGoal(formValue).subscribe((res: any) => {
      if (res) {
        alert('Saved Successfully');
        this.initializeGoalForm();
        this.initializeMilestoneForm();
        this.goalForm.get('userId')?.setValue(this.authService.loggedUserData.userId);
      }
    }, error => {
      alert(error.error);
    })
  }

}
