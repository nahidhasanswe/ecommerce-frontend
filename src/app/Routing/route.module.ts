import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from '../Components/Auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from '../Components/Auth/change-password/change-password.component';
import { HomeComponent } from '../Components/market-place/home/home.component';
import { ProductListComponent } from '../Components/market-place/product-list/product-list.component';
import { DashboardComponent } from '../Components/dashboard/consumer/dashboard/dashboard.component';
import { GlobalNavbarComponent } from '../Components/dashboard/navbar/navbar.component';
import { MyPageComponent } from '../Components/dashboard/consumer/myPage/mypage.component';

const routes: Routes = [
  {path: '', redirectTo: 'productList', pathMatch: 'full'},
  {path: 'ResetPassword', component: ResetPasswordComponent},
  {path: '', component: HomeComponent, children: [
    {path: 'productList', component: ProductListComponent},
    {path: 'ChangePassword', component: ChangePasswordComponent},
  ]},
  {path: 'mypage', component: DashboardComponent, children: [
    {path: 'dashboard', component: MyPageComponent},
    {path: 'Change-Password', component: ChangePasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
