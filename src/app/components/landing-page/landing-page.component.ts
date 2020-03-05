import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public loginForm;

  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      fileId:null,
      password:null,
      keepLoggedCheck:null
    })
  }

  onSubmit(){
    console.log(this.loginForm);
  }
  ngOnInit(): void {
  }

}
