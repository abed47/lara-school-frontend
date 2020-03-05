import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from './../../services/login.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public loginForm;

  constructor(private formBuilder:FormBuilder,private loginApi:LoginService) {
    this.loginForm = this.formBuilder.group({
      fileId:null,
      password:null,
      keepLoggedCheck:null
    })
  }

  onSubmit(){
    this.loginApi.login(this.loginForm);
  }
  ngOnInit(): void {
  }

}
