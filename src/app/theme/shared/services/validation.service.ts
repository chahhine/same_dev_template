import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() { }

  // Validator for matching password and confirm password fields
  static matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const parent = control.parent as FormGroup;
      if (parent && control.value !== parent.controls[matchTo].value) {
        return { mismatch: true };
      }
      return null;
    };
  }

  // Get validation error message
  static getValidationErrorMessage(control: AbstractControl, fieldName: string): string {
    if (!control || !control.errors) {
      return '';
    }

    const errors = control.errors;
    const formattedFieldName = this.formatFieldName(fieldName);

    if (errors['required']) {
      return `${formattedFieldName} is required`;
    }

    if (errors['email']) {
      return `Please enter a valid email address`;
    }

    if (errors['minlength']) {
      return `${formattedFieldName} must be at least ${errors['minlength'].requiredLength} characters`;
    }

    if (errors['maxlength']) {
      return `${formattedFieldName} cannot exceed ${errors['maxlength'].requiredLength} characters`;
    }

    if (errors['pattern']) {
      return `Invalid ${formattedFieldName.toLowerCase()} format`;
    }

    if (errors['mismatch']) {
      return `${formattedFieldName} does not match`;
    }

    if (errors['min']) {
      return `${formattedFieldName} must be at least ${errors['min'].min}`;
    }

    if (errors['max']) {
      return `${formattedFieldName} cannot exceed ${errors['max'].max}`;
    }

    return `Invalid ${formattedFieldName.toLowerCase()}`;
  }

  // Format field name for error messages
  private static formatFieldName(fieldName: string): string {
    if (!fieldName) {
      return 'Field';
    }

    // Handle camelCase or snake_case by adding spaces before capitals or underscores
    const formatted = fieldName
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .trim();

    // Capitalize first letter
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  // Pattern for password validation (at least 8 chars, one uppercase, one lowercase, one number)
  static readonly PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/;

  // Email validation pattern
  static readonly EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
}
