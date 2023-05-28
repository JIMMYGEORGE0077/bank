import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  jim="Happy Banking with Us "
  plchldrjim="Enter account number"


  login(){
    alert("login click cheythu")
  }
  acnoChange(event:any){
    console.log(event.target.value);
    
  }
  
}

