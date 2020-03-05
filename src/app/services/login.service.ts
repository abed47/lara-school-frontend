import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { format } from 'path';
import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   *
   * @param formData
   */
  public login(formData:FormGroup){
    let fileId:string = formData.value.fileId;
    let password:string = formData.value.password;
    let keepLogged:boolean = formData.value.keepLoggedCheck ?? false;
    this.http.post(environment.apiUrl+'/api/login',{
      fileId : fileId,
      password: password,
      keepLogged: keepLogged
    }).subscribe(
      response => {
        return this.responseHandler(response);
      },
      error => {
        console.log(error)
      }
    )
  }

  /**
   *
   * @param res - response object
   *
   */
  private responseHandler(res){
    return res;
  }
}
