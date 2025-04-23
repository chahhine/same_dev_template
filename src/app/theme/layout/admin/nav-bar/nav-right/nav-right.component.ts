import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-right',
  standalone: true,
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  imports: [NgClass]
})
export class NavRightComponent implements OnInit {
  public notificationOpen = false;
  public profileOpen = false;

  constructor() {}

  ngOnInit() {}

  toggleNotification() {
    this.notificationOpen = !this.notificationOpen;
    this.profileOpen = false;
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
    this.notificationOpen = false;
  }
}
