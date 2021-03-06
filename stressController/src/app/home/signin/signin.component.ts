import { Component, OnInit } from '@angular/core';
import { AllUser } from '../all_user';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 
  uname:string;
  pwd:string;
  signinerrorMsg:string;
  errpassword:string;

  user:AllUser = new AllUser();

  constructor(private homeService:HomeService,private router:Router) { }

  ngOnInit() {
  }


  onSignIn(){
   
      this.homeService.get_signin(this.uname,this.pwd).subscribe(
        (req)=>{
    
          //console.log("siginin");
          
          localStorage.setItem("id",req['id']);
          localStorage.setItem("name",req['name']);
          localStorage.setItem("longi",this.user.longitude);
          localStorage.setItem("lati",this.user.latitude);
         
          localStorage.setItem("tok",req['session_token']);
          localStorage.setItem("type",req['type']);
    
          
    
          //we must set the image file for the user
    
          if(req['type']== "user"){
            this.router.navigate(['/user']);
          }
          if(req['type'] == "counceller"){
            this.router.navigate(['/counceller']);
          }
          if(req['type'] == "admin"){
            this.router.navigate(['/admin']);
          }
        },
        (err)=>{
    
    
          console.log(err.error['response']);
          this.signinerrorMsg = err.error['response'];
    
        }
      );
      
   
   
  }
  
  

}
