import { Component, OnInit } from '@angular/core';
import { paths } from '../../models/paths';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  paths = paths;
  constructor() { }

  ngOnInit(): void {
  }

}
