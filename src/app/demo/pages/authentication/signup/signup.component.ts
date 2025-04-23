import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../theme/shared/services/auth.service';
import { ValidationService } from '../../../../theme/shared/services/validation.service';
import { FormErrorComponent } from '../../../../theme/shared/components/form-error/form-error.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Initialize the form with validation
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(ValidationService.PASSWORD_PATTERN)
        ]
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: [
        // Add custom validator to check if passwords match
        this.passwordMatchValidator
      ]
    });

    // Auto-redirect if already logged in
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard/analytics']);
    }
  }

  // Custom validator to ensure passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      // Only clear the mismatch error, keep other errors if any
      const errors = formGroup.get('confirmPassword')?.errors;
      if (errors) {
        delete errors['mismatch'];
        formGroup.get('confirmPassword')?.setErrors(Object.keys(errors).length ? errors : null);
      }
    }
    return null;
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.register(
      this.f['email'].value,
      this.f['password'].value,
      this.f['name'].value
    ).subscribe({
      next: (response) => {
        this.successMessage = response.message;

        // Navigate to dashboard after a short delay
        setTimeout(() => {
          this.router.navigate(['/dashboard/analytics']);
        }, 1500);
      },
      error: (error) => {
        this.error = error.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }
}
