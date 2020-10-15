import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any ={
    Username:'',
    Password:''
};
  constructor(private router:Router,
    private commonService:CommonsService) { }

  ngOnInit() {
    sessionStorage.clear();
    this.user ={
      Username:'',
      Password:''
  };
  }
 

  login() {
   if(this.user.Username=="herman" && this.user.Password=="herman@9705")
   {
     //user type for caregiver
     sessionStorage.setItem('userType','02');
     sessionStorage.setItem('userName',"Herman Beck");
     sessionStorage.setItem('role',"Member");
     
     this.router.navigateByUrl('/memberDetails');
   }
   if(this.user.Username=="william" && this.user.Password=="william@9705")
   {
     //user type for member
     sessionStorage.setItem('userType','01');
     sessionStorage.setItem('userName',"William Richards");
     sessionStorage.setItem('role',"Caregiver");
    
     this.router.navigateByUrl('/dashboard');
   }
}
}