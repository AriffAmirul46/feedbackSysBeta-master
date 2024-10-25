import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Make sure this is the correct path
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  async loginUser() {
    if (this.loginData.email && this.loginData.password) {
      try {
        await this.authService.login(this.loginData.email, this.loginData.password);
        alert('Login successful');
        this.router.navigate(['/home']);
      } catch (error: any) {
        const errorMessage = error.message ? error.message : 'Unknown error occurred';
        alert('Error: ' + errorMessage);
      }
    } else {
      alert('Please fill in both fields');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);  // Navigate to the register page
  }
}
