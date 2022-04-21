import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm = this.fb.group({
    email:[''],
    pass:['']
  })
  constructor(private fb:FormBuilder , private route:Router) {  }


  ngOnInit(): void {
  }

  submit(){
    this.route.navigateByUrl('dashboard')
  }
}
