import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horizontal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Horizontal Layout</h5>
          </div>
          <div class="card-body">
            <p>This is a horizontal layout page for demonstration.</p>
            <p>The Next template supports horizontal layout navigation options.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HorizontalComponent {
  constructor() { }
}
