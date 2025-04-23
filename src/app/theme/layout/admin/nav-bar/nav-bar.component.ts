import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [NgClass, NavLeftComponent, NavRightComponent]
})
export class NavBarComponent implements OnInit {
  @Input() navCollapsed: boolean;
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navCollapse() {
    this.onNavCollapse.emit();
  }

  navHeaderMobCollapse() {
    this.onNavHeaderMobCollapse.emit();
  }
}
