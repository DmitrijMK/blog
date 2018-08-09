import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, private _local: LocalstorageService, private _route: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [null, [Validators.required]],
      passWord: [null, [Validators.required]]
    });
  }

  authorization(data) {
    const authData = this._local.getLocalData(data['login']);
    if (authData.passWord === data.passWord) {
      this._local.setRegitrationData({'isLogin': true});
      this._route.navigate(['']);
    }
  }
}
