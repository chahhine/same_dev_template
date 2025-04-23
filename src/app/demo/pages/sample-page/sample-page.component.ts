import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Sample Page</h5>
          </div>
          <div class="card-body">
            <p>This is a sample page for demonstration.</p>
            <p>You can use this as a starting point for creating custom pages.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SamplePageComponent {
  constructor() { }
}
