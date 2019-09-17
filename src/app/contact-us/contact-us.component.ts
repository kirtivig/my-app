import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidation } from './username.validation';
// AbstractControl is the parent class for FormControl and FormGroup

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form = new FormGroup({
      username: new FormControl('', 
        [Validators.required, Validators.minLength(3), UsernameValidation.cannotContainSpace],
        UsernameValidation.shouldBeUnique), // mapped with formControlName
      password: new FormControl('',Validators.required) 
  });

  login(){
    // let isValid = authService.login(this.form.value);
    // if(!isValid){
      this.form.setErrors({
        invalidLogIn: true
      });
    }
//}

  constructor() { }

  ngOnInit() {
  }

  get username(){
    return this.form.get('username');
  }

/*Form Builder syntax
constructor(fb: FormBuilder){
  this.form = fb.group({
    name: ['', Validators.required],
    contact: fb.group({
      email: [],
      phone: []
    }),
    topics: fb.array([])
  });
}
*/

}
