import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="invalid-feedback" [class.d-block]="shouldShowError">
      {{ errorMessage }}
    </div>
  `,
  styles: [`
    .invalid-feedback {
      font-size: 80%;
      color: #f44336;
      margin-top: 0.25rem;
    }
  `]
})
export class FormErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() fieldName: string = '';
  @Input() showErrorWhen: 'touched' | 'dirty' | 'always' = 'touched';

  get shouldShowError(): boolean {
    if (!this.control) {
      return false;
    }

    const { invalid, touched, dirty } = this.control;

    if (this.showErrorWhen === 'always') {
      return invalid;
    }

    if (this.showErrorWhen === 'touched') {
      return invalid && touched;
    }

    return invalid && dirty;
  }

  get errorMessage(): string {
    if (!this.control || !this.control.errors) {
      return '';
    }

    return ValidationService.getValidationErrorMessage(this.control, this.fieldName);
  }
}
