import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../core/localstorage/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _local: LocalstorageService) {
  }

  ngOnInit() {
  }

  isLogin() {
    return !this._local.isUserLogin();
  }
}
