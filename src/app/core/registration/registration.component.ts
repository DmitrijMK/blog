import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService } from '../localstorage/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public hide = true;
  public registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _local: LocalstorageService,
    private _route: Router) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      login: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      passWord: [null, [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){4,20}$')
      ]],
      repeatPassWord: [null, [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){4,20}$'),
      ]]
    });
  }

  registration(data) {
    this._local.setLocalData(data);
    this._route.navigate(['/core/login']);
  }
}
