import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [AsyncPipe, DatePipe, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  @ViewChild('taskModal') taskModal!: ElementRef;
  taskObj: TaskModel = new TaskModel();
  taskService = inject(TaskService);
  authService = inject(AuthService);
  taskList$: Observable<any[]> = new Observable<any[]>();

  ngOnInit(): void {
    debugger
    this.taskList$ = this.taskService.getAllTasks(this.authService.loggedUserData.userId);
  }

  openModal() {
    if (this.taskModal) {
      this.taskModal.nativeElement.style.display = "block";
    }
  }

  closeModal() {
    if (this.taskModal) {
      this.taskModal.nativeElement.style.display = "none";
    }
  }

  onSaveTask() {
    debugger
    this.taskService.createTask(this.taskObj).subscribe((res: any)=> {
      if(res) {
        alert('Created Successfully');
        this.taskObj = new TaskModel();
        this.closeModal();
      } else {
        alert('Failed to Create');
      }
    })
  }


}
