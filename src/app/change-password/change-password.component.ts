import { PasswordValidator } from './password.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidator.passwordIsInvalid],
      newAndConfirm: fb.group({
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {validators: [PasswordValidator.newAndConfirmNotEqual]})
     
    })
   }

   get oldPassword(){
     return this.form.get('oldPassword');
   }
   get newPassword(){
    return this.form.get('newAndConfirm.newPassword');
  }
  get confirmPassword(){
    return this.form.get('newAndConfirm.confirmPassword');
  }

  get newAndConfirm(){
    return this.form.get('newAndConfirm');
  }

  changePassword(){
    console.log("Password changed successfully!");
  }

  

  

}
