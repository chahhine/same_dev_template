import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="cardClass">
      <div class="card-header" *ngIf="!hidHeader" [ngClass]="headerClass">
        <h5>{{ cardTitle }}</h5>
        <div class="card-header-right" *ngIf="options">
          <div class="btn-group card-option">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="feather icon-more-horizontal"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:"><i class="feather icon-refresh-cw"></i> Reload</a>
              <a class="dropdown-item" href="javascript:"><i class="feather icon-maximize"></i> Expand</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body" [ngClass]="blockClass">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      margin-bottom: 30px;
      border: none;
      transition: all 0.5s ease-in-out;
      border-radius: 5px;
      box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.15);
    }

    .card .card-header {
      background-color: transparent;
      border-bottom: 1px solid #f1f1f1;
      padding: 20px 25px;
      position: relative;
    }

    .card .card-header h5 {
      margin-bottom: 0;
      color: #37474f;
      font-size: 15px;
      font-weight: 500;
      display: inline-block;
      margin-right: 10px;
      line-height: 1.1;
      position: relative;
    }

    .card .card-header .card-header-right {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .card .card-body {
      padding: 25px;
    }
  `]
})
export class CardComponent implements OnInit {
  @Input() cardTitle = '';
  @Input() cardClass = '';
  @Input() blockClass = '';
  @Input() headerClass = '';
  @Input() options = true;
  @Input() hidHeader = false;

  constructor() { }

  ngOnInit() { }
}
