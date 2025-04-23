import { Component, OnInit } from '@angular/core';
import { NavSearchComponent } from './nav-search/nav-search.component';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss'],
  imports: [NavSearchComponent]
})
export class NavLeftComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
