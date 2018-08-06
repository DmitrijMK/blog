// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
export class LocalstorageService {
  setRegitrationData(data) {
    localStorage.setItem('isLogin', JSON.stringify(data));
  }

  setLocalData(data) {
    localStorage.setItem(`${data.login}`, JSON.stringify(data));
  }

  getLocalData(value) {
    return JSON.parse(localStorage.getItem(`${value}`));
  }

  isUserLogin() {
    if (this.getLocalData('isLogin') === null) {
      this.setRegitrationData({'isLogin': false});
      return false;
    }
    return this.getLocalData('isLogin').isLogin;
  }


}
