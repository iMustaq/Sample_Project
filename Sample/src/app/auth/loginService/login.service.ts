import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: any = 'sampleCode';
  private _pass: any = '123';

  constructor() { }

  public get pass(): any {
    return this._pass;
  }
  public set pass(value: any) {
    this._pass = value;
  }
  public get user(): any {
    return this._user;
  }
  public set user(value: any) {
    this._user = value;
  }
  data(){
    console.log("datas",this.user,this.pass)
  }
}
