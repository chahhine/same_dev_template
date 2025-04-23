import { Component, NgZone, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NextConfig } from '../../../app-config';
import { NavigationComponent } from './navigation/navigation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  imports: [RouterOutlet, NavigationComponent, NavBarComponent]
})
export class AdminComponent implements OnInit {
  public nextConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;

  constructor(
    private zone: NgZone,
    private location: Location,
    private locationStrategy: LocationStrategy
  ) {
    this.nextConfig = NextConfig.config;
    this.navCollapsed = this.nextConfig.collapseMenu;
    this.navCollapsedMob = false;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      this.navCollapsed = false;
      this.navCollapsedMob = true;
    }
  }

  navMobClick() {
    if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open'))) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
}
