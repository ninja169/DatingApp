import { AuthService } from './../_services/auth/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model:any = {};

  

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  register(){
    this.authService.register(this.model)
    .subscribe(() => console.log("Registration succesfull")
    , error => console.log(error));
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.model.username =null;
    this.model.password =null;
  }
}
