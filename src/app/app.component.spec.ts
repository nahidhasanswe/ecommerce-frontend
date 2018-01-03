import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService} from './auth/auth.service';
import { HttpModule, ConnectionBackend} from '@angular/http';
import { HttpService } from './auth/http.service';
import { LoginComponent } from './Components/Auth/login/login.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      imports: [HttpModule],
      providers : [AuthService, HttpService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
