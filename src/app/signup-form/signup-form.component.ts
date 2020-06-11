import { UsernameValidator } from './username.validator';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6),
        UsernameValidator.cannotContainSpace], 
       UsernameValidator.shouldBeUnique),
      password: new FormControl('', [Validators.required])
    }),
    topics: new FormArray([])
  });

  login(){
    this.form.setErrors({
      invalidLogIn: false
    });
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get username(){
    return this.form.get("account.username");
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
