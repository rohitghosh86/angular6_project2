import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})

export class ModelFormComponent implements OnInit {

  hobbyForm;

  constructor() { }

  ngOnInit() {
    this.hobbyForm = new FormGroup({
      fnane:new FormControl("", Validators.compose([
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname:new FormControl("", this.myCustomMinLength),
      hobby:new FormControl()
    });
  }

  myCustomMinLength(control) {
    if (control.alue.length < 4) {
      return {'lname': true}
    }
  }

  submitUserHobby = function(user) {
    console.log(user);
  }

}
