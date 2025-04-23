import { Component, Input, OnInit, NgZone } from '@angular/core';
import { NavigationService } from './navigation.service';
import { NavContentComponent } from './nav-content/nav-content.component';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NavigationService],
  imports: [NgClass, NavContentComponent]
})
export class NavigationComponent implements OnInit {
  @Input() navCollapsed: boolean;
  @Input() navCollapsedMob: boolean;

  windowWidth: number;

  constructor(
    private zone: NgZone,
    private router: Router,
    public nav: NavigationService
  ) {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {}

  onResize(e) {
    if (this.windowWidth > 992) {
      this.navCollapsed = false;
      this.navCollapsedMob = false;
    } else {
      this.navCollapsed = true;
    }
  }
}
