import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared';

@Component({
  templateUrl: './create-session.component.html',
  styles: [
    `
      em { color: red; float: right;}
      .error input { background-color: #E3C3C5;}
      .error textarea { background-color: #E3C3C5}
    `
  ]
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(10),
      this.restrictedWords]
    );
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
  saveSession(forvalues) {
    let session: ISession = {
      id: undefined,
      name: forvalues.name,
      presenter: forvalues.presenter,
      duration: +forvalues.duration,
      level: forvalues.level,
      abstract: forvalues.abstract,
      voters: []
    };
    console.log(session);
  }

  restrictedWords(control:  FormControl): {[key: string]: any} {
    return  control.value.includes('com') ? {'restrictedWords': 'com'} : null;
  }
}

