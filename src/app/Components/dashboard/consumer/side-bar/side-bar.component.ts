import { Component, OnInit, Input} from '@angular/core';
import { ROUTES } from './side-bar.config';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;

  @Input()
  routingUrls: any[];

  constructor() {
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(0,0,0,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';

  }

  ngOnInit() {
    this.menuItems = this.routingUrls;
  }

}
