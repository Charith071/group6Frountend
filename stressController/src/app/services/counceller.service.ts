import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { AllUser } from '../home/all_user';


@Injectable({
  providedIn: 'root'
})
export class CouncellerService {
  private baseUrl:string = 'http://206.189.89.19:8081/api';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/json').append('Authorization',localStorage.getItem("tok")).append('id',localStorage.getItem("id"))
    
  };

  constructor(private http:HttpClient) { }


  change_counceller_gps(id:string,gps:string){
    return this.http.post(this.baseUrl+'/counceller/gps',{id,gps});
  }

  /*chat(msg:ChatMessage){
    return this.http.post(this.baseUrl+'/chat',JSON.stringify({msg}),this.httpOptions);
  }*/

  get_patient_details(counceller_id:string,patient_id:string){
    return this.http.post(this.baseUrl+'/PatientDetails',{counceller_id,patient_id},this.httpOptions);
  }

  addTrack(counceller_id:string,description:string,name:string,max_stress_level:string,min_stress_level:string){
    return this.http.post(this.baseUrl+'/addTrack',{counceller_id,description,max_stress_level,min_stress_level});
  }

  account_setting(user:AllUser){
    return this.http.put(this.baseUrl+'/accountSetting',JSON.stringify(user));
  }

  booking_response(counceller_id,request_id,date_time,location,details,payment,counceller_status){
      return this.http.post(this.baseUrl+'/counceller/Response',{counceller_id,request_id,date_time,location,details,payment,counceller_status},this.httpOptions);
  }

  add_tips(counceller_id:string,tip:string){
    return this.http.post(this.baseUrl+'/counceller/AddTips',{counceller_id,tip},this.httpOptions)
  }

  getData(id:string){
    return this.http.post(this.baseUrl+'/getData',{id},this.httpOptions);
    
  }

  realtime(id:string){
      return this.http.post(this.baseUrl+'/realtime',{id},this.httpOptions);
  }
}
