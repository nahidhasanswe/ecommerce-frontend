import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { ThemeChangeService } from '../../../../themes/theme-change.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css'],
})
export class MyPageComponent implements OnInit {

  public theme = '';
  constructor(public auth: AuthService, public themeService: ThemeChangeService) {

  }

  ngOnInit() {
  }

  changeTheme () {
    this.themeService.setCurrentTheme(this.theme);
  }

}
