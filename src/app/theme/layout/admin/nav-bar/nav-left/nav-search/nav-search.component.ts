import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-search',
  standalone: true,
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss'],
  imports: [NgClass]
})
export class NavSearchComponent implements OnInit {
  public searchOpen = false;

  constructor() {}

  ngOnInit() {}
}
