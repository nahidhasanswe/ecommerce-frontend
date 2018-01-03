import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import { AuthService } from '../../../../auth/auth.service';
import { Route, Router } from '@angular/router';
import { ROUTES } from '../side-bar/side-bar.config';

import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class DashboardComponent implements OnInit {

  screenWidth: number;
  public urls: any[] = ROUTES;

  constructor(public media: ObservableMedia, public auth: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  Logout() {
    this.auth.logout();
    this.route.navigateByUrl('/');
  }

}
