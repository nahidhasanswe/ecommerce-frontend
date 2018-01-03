import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public changePasswordForm;
  constructor() { }

  ngOnInit() {
    const newpassword = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(newpassword)]);

    this.changePasswordForm = new FormGroup({
      OldPassword : new FormControl('', Validators.required),
      NewPassword : newpassword,
      ConfirmPassword : confirmPassword
    });
  }

  ChangePassword(changePasswordData, isValid) {
    if (isValid) {
      // take action when form is valid
    }else {
      // take action when form is not valid
    }
  }

}
