import { Component, ElementRef, Inject, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Login, Register } from './models/auth';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'goal_planner';

  @ViewChild('authModal') authModal!: ElementRef;
  isLoginFormVisible = signal<boolean>(true);

  registerObj: Register = new Register();
  loginObj: Login = new Login();
  authService = inject(AuthService);
  loggedUserData: any;
  router = inject(Router);

  constructor() {

  }

  ngOnInit(): void {
    debugger
    const localData = localStorage.getItem("goalAppUser");
    if(localData) {
      this.loggedUserData = JSON.parse(localData);
      console.log(this.loggedUserData);
    }
  }

  onLogin() {
    this.authService.login(this.loginObj).subscribe((res: any) => {
      debugger
      if (res != null) {
        alert('Login Successfully');
        localStorage.setItem('goalAppUser', JSON.stringify(res));
        this.loggedUserData = res;
        this.closeModal();
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    })
  }

  onLogOff() {
    const isConfirm = confirm('Are you sure to log off?');
    if(isConfirm) {
      localStorage.removeItem('goalAppUser');
      this.loggedUserData = null;
      this.loginObj = new Login();
      this.router.navigateByUrl('home');
    }
  }

  onRegister() {
    this.authService.register(this.registerObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert('Registered Successfully');
      } else {
        alert(res.message);
      }
    })
  }

  openModal() {
    if (this.authModal) {
      this.authModal.nativeElement.style.display = "block";
    }
  }

  closeModal() {
    if (this.authModal) {
      this.authModal.nativeElement.style.display = "none";
    }
  }

  toggleAuthForm() {
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
  }
}
