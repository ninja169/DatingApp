import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


const BASE_URL = "http://localhost:5000/api/auth/";

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(BASE_URL + "login", model)
            .pipe(
              map((response:any) => {

                const user = response;
                if(user){
                  localStorage.setItem("token", user.token);
                }
              })
            )
            
  }

  register(model:any){
    return this.http.post(BASE_URL + "register", model);
  }

}
