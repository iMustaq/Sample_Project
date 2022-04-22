import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../auth/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg:any='';
  myForm = this.fb.group({
    email:[''],
    pass:['']
  })
  constructor(private fb:FormBuilder , private route:Router, private loginSer :LoginService) {  }


  ngOnInit(): void {
  }

  submit(){
    this.loginSer.data()
    if( this.myForm.controls.email.value &&  this.myForm.controls.pass.value){
    if(Number(this.myForm.controls.pass.value) == this.loginSer.pass && this.myForm.controls.email.value == this.loginSer.user ){
      this.route.navigateByUrl('dashboard');
    }{
      this.errorMsg = "Please enter valid user and Password"
    }
  }else{
    this.errorMsg = "Please Enter user and Password"
  }

  }
}
