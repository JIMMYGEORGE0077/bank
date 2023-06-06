import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JimService } from '../jim.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jim="Happy Banking with Us "
  plchldrjim="Enter account number"

  serviceData:any

  acno:any
  psw:any

  constructor(private router:Router,private ds:JimService) { }

  ngOnInit(): void{
    
  }

  login(){
    var acno=this.acno
    var psw=this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
    }
    )
    // alert("login click cheythu")
    // this.abc.navigateByUrl('home')
    // login click cheyumbo home pagilek pokan - constructor line & melethe line um
  
  // console.log(this.acno);
  // console.log(this.psw);
  }
}