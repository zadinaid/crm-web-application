import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activetab = "home";
  constructor(private location: Location, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  getActiveTab(tabname: string) {

    this.activetab = tabname;
  }

  logout() {
    this.auth.logout();
  }
}
