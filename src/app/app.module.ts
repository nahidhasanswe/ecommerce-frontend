import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './Routing/route.module';
import { MatSidenavModule, MatListModule } from '@angular/material';

import { ToastyModule } from 'ng2-toasty';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { HttpService } from './auth/http.service';
import { MatInputModule, MatIconModule, MatSelectModule} from '@angular/material';
import { MatCardModule, MatGridListModule} from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule, MatTooltipModule, MatMenuModule} from '@angular/material';
import { MatProgressBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegistrationComponent } from './Components/Auth/registration/registration.component';
import { ResetPasswordComponent } from './Components/Auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/Auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/Auth/change-password/change-password.component';
import { HomeComponent } from './Components/market-place/home/home.component';
import { NavbarComponent } from './Components/market-place/navbar/navbar.component';
import { ProductListComponent } from './Components/market-place/product-list/product-list.component';
import { DashboardComponent } from './Components/dashboard/consumer/dashboard/dashboard.component';
import { GlobalNavbarComponent } from './Components/dashboard/navbar/navbar.component';
import { SideBarComponent } from './Components/dashboard/consumer/side-bar/side-bar.component';

import { ThemeChangeService } from './themes/theme-change.service';

import { MyPageComponent } from './Components/dashboard/consumer/myPage/mypage.component';


export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    DashboardComponent,
    GlobalNavbarComponent,
    SideBarComponent,
    MyPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ToastyModule.forRoot(),
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [AuthService, ThemeChangeService,
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
