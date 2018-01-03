import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginComponent } from '../../Auth/login/login.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
  }

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '320px'
    });
  }

  logout() {
    this.auth.logout();
  }

}
