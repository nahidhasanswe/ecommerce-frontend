import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './Components/Auth/login/login.component';
import {OverlayContainer} from '@angular/cdk/overlay';

import { ThemeChangeService } from './themes/theme-change.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  theme = 'indigo-theme';
  subscription: Subscription;
  constructor (auth: AuthService, private dialog: MatDialog, public overlay: OverlayContainer,
                themeChanger: ThemeChangeService) {
       themeChanger.setCurrentTheme(this.theme);
       this.subscription = themeChanger.getCurrentTheme().subscribe(themeName => { this.theme = themeName; });
       console.log('Hitting...');
  }

  viewLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '320px'
    });
  }

  ngOnInit() {
    this.overlay.getContainerElement().classList.add(this.theme);
  }
}
