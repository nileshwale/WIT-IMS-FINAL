import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,
})
export class SignupPage {
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const payload = { email: this.email, password: this.password };

    this.http.post('http://localhost:3000/api/signup', payload).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        this.successMessage = response.message || 'Signup successful! Redirecting to login...';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        console.error('Error:', err);
        this.successMessage = '';
        this.errorMessage =
          (typeof err.error === 'string' && err.error) ||
          (err.error && err.error.error) || // <-- use the .error key if present
          'Signup failed';
      }
    });}}