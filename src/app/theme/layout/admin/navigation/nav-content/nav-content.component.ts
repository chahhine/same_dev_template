import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { NavigationItem } from '../../navigation/navigation';
import { Router } from '@angular/router';
import { NavigationService } from '../../navigation/navigation.service';
import { Location } from '@angular/common';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
  imports: [NgFor, NgClass, NavGroupComponent]
})
export class NavContentComponent implements OnInit {
  @Input() navCollapsed: boolean;
  @Output() onNavCollapsedMob = new EventEmitter();

  public navigation: any;
  public windowWidth: number;
  public navigationalItems: NavigationItem[];

  constructor(
    private route: Router,
    private nav: NavigationService,
    private zone: NgZone,
    private location: Location
  ) {
    this.windowWidth = window.innerWidth;
    this.navigationalItems = this.nav.get();
  }

  ngOnInit() {}

  fireOutClick() {
    const current_url = this.location.path();
    if (this.windowWidth < 992) {
      this.onNavCollapsedMob.emit();
    }
  }
}
