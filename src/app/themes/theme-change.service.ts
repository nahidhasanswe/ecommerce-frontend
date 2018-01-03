import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeChangeService {

  public theme  = new Subject<string>();

  constructor () {

  }

  getCurrentTheme (): Observable<string> {
    return this.theme.asObservable();
  }

  setCurrentTheme(themeName: string) {
    this.theme.next(themeName);
  }
}
