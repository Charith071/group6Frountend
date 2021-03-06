import { Component, OnInit } from '@angular/core';
import { AllUser } from '../all_user';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  uname:string;
  pwd:string;
  signinerrorMsg:string;
  signuperrorMsg:string;
  signupsuccessmsg:string;
  picture=null;
  forgot:boolean= false;
  forgotemail:string;
  
  siginupError:string;

  user:AllUser = new AllUser();

  constructor(private homeService:HomeService,private router:Router) {
   
   }
  
  ngOnInit() {

  }





  onSignUp(){

    if(this.validate()){

      console.log("validatinggg");
      
    }else{
      console.log("false");
      
    }
    this.homeService.get_signup(this.user).subscribe(
      (req)=>{
      //  localStorage.setItem("id",req['id']);
        //localStorage.setItem("name",req['name']);
        //localStorage.setItem("longi",this.user.longitude);
       // localStorage.setItem("lati",this.user.latitude);
        //localStorage.setItem("tok",req['session_token']);
        localStorage.setItem("SiginUptype",this.user.type);
  
        console.log(req);
        if(req['res_status']=="success"){
          this.signupsuccessmsg="User Registered Successfully";
            if(localStorage.getItem('SiginUptype')=="user"){
              //console.log('sigininiiinninin');
              
              this.homeService.get_signin(this.user.username,this.user.password).subscribe(
                (req)=>{
            
                 // console.log("siginin");
                  
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
          
         // this.router.navigate(['/user']);
        }
  
        //this.form.reset();
  
      },
      (err)=>{
        console.log(err.error['response']);
        this.signuperrorMsg=err.error['response'];
      }
       ); 
  
  
  }

  showhiddensignup1(){
    var x = document.getElementById("ccounceller");
    var y = document.getElementById("cuser");
    
  
    x.style.display = "block";
   
    y.style.display="none"
  
  
  }

   showhiddensignup2(){
    var x = document.getElementById("ccounceller");
    var y = document.getElementById("cuser");
    
    x.style.display="none";
    y.style.display="block";
  
  
  }

validate():boolean{
 
  if(this.user.name.length>0){
    if(this.user.email.length>0){
      if(this.EmailValidater(this.user.email)){
          if(this.user.username.length>0){
            if(this.user.username.length>5){
              if(this.user.password.length>0){
                if(this.user.password.length>5){
                  if(this.user.conpassword.length>0){
                    if(this.user.gender.length>0){
                      if(this.user.address.length>0){
                        if(this.phoneNumberValidare(this.user.phone_number)){
                          if(this.user.birth_date.length>0){
                            if(this.user.type==="user"){
                              if(this.phoneNumberValidare(this.user.guadiant_phone_number)){
                                if(this.user.job.length>0){
                                  return true;
                                }else{
                                  this.siginupError="Job cannot be empty!";
                                  return false;
                                }
                              }else{
                                this.siginupError="Incorrect Guadiant`s phone number!";
                                return false;
                              }
                            }else if(this.user.type==="counceller"){
                              if(this.user.qualification.length>0){
                                if(this.user.certificate.length>0){
                                  return true;
                                }else{
                                  this.siginupError="Certificate cannot be empty!";
                                  return false;
                                }
                              }else{
                                this.siginupError="Qualification cannot be empty!";
                                return false;
                              }
                            }else{
                              this.siginupError="Type cannot be empty!";
                              return false;
                            }
                          }else{
                            this.siginupError="BirthDay cannot be empty!";
                            return false;
                          }
                        }else{
                          this.siginupError="Incorrect phone number!";
                          return false;
                        }
                      }else{
                        this.siginupError="Address cannot be empty!";
                        return false;
                      }
                    }else{
                      this.siginupError="Gender cannot be empty!";
                      return false;
                    }
                  }else{
                    this.siginupError="ConfirmPassword cannot be empty!";
                    return false;
                  }
                }else{
                  this.siginupError="Password should be minimum 6 characters!";
                  return false;
                }
              }else{
                this.siginupError="Password cannot be empty!";
                return false;
              }
            }else{
              this.siginupError="Username should be minimum 6 characters!";
              return false;
            }
          }else{
            this.siginupError="Username cannot be empty!";
            return false;
          }
      }else{
        this.siginupError="Email is not valid!";
        return false;
      }
    }else{
      this.siginupError="Email cannot be empty!";
      return false;
    }
  }else{
   this.siginupError="Name cannot be empty!";
   return false;
  }
 
}
 
EmailValidater(e:string):boolean{
  return true;
}


phoneNumberValidare(n:string):boolean{
  if(n.length>0){
    if(n.length==10){
      return true;
    }else{
      this.siginupError="Invalid phone number!";
      return false;
    }
    
  }else{
    this.siginupError="Phone number cannot be empty!";
    return false;
  }
 
}

}
