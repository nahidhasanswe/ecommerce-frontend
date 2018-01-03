import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import {ServerBasePath} from '../Server-Base-Path/server-path';
import { JwtHelper } from 'angular2-jwt';
import { HttpService } from './http.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private serverPath = ServerBasePath.serverPath;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http, private authHttp: HttpService) { }

  contentHeaders() {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    return header;
  }

  /* Method for token request from server
  * @Parameter AuthData means Username & password
  * @Return Boolean
  */
  login(authData) {
    // const body = 'username=' + data.username + '&password=' + data.password + '&grant_type=password';
    const body = {
      grant_type: 'password',
      username: authData.username,
      password: authData.password
    };

   return this.http.post(this.serverPath + '/token', body, {headers: this.contentHeaders()}).map((res) => {
    const loginData = res.json();
    localStorage.setItem('accessToken', loginData.access_token);
    return true;
   });

  }

  /* Method for logout and remove token
  * @Parameter No parameter
  * @Return Boolean
  */
  logout() {
    localStorage.removeItem('accessToken');
    return true;
  }

  /* Method for registration in the system
  * @Parameter No parameter
  * @Return Boolean
  */
  registration(data: any) {
      return this.http.post(this.serverPath + '/api/account/registration', data);
  }

  /* Method for change password
  * @Parameter newPassword, confirmPassword
  * @Return Response message from serve
  */
  changePassword(changePasswordData) {
    return this.authHttp.post(this.serverPath + '', changePasswordData).map(response => response.json());
  }

  /* Method for request reset password when forgot password
  * @Parameter user email
  * @Return Response string
  */
  forgotPassword(data) {
    return this.http.post(this.serverPath + '', data).map(response => response.json());
  }

  /* Method for Reset password
  * @Parameter email, new password, confirm password
  * @Return Response string
  */
  resetPassword(data) {
    return this.http.post(this.serverPath + '', data).map(response => response.json());
  }

  /* Method for Checked that claimed user is authenticate or not ?
  * @Parameter No parameter
  * @Return Boolean
  */
  checkLogged() {
    if (localStorage.getItem('accessToken')) {
      const token = localStorage.getItem('accessToken');
      return !this.jwtHelper.isTokenExpired(token);
    }else {
      return false;
    }
  }

  /* Method for get the logged user name
  * @Parameter No parameter
  * @Return string
  */
  getLoggedUsername () {
    if (localStorage.getItem('accessToken')) {
      const token = localStorage.getItem('accessToken');
      const tokenDecode = this.jwtHelper.decodeToken(token);
      return tokenDecode['unique_name'];
    }

    return null;
  }

  getLoggedEmail () {
    if (localStorage.getItem('accessToken')) {
      const token = localStorage.getItem('accessToken');
      const tokenDecode = this.jwtHelper.decodeToken(token);
      return tokenDecode['email'];
    }

    return null;
  }

  setToken () {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5haGlkaDUyN0BnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6Ik5haGlkIEhhc2FuIiwiaXNzIjoibmFoaWRoYXNhbi5zd2UiLCJhdWQiOiJHcm9jZXJ5TGlzdEFQSSIsIm5iZiI6MTUxMjEwMzcwNiwiaWF0IjoxNTEyMTAzNzA2LCJleHAiOjE1MTI3MDg1MDZ9.gFHCC4Qz0c9SKrZv0UTOGRReJb-8WRBqwLwqmR-uen8';
    localStorage.setItem('accessToken', token);
  }

}
