import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44350/api/customers';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public retrieveById(payload){
    return this.http.get(this.accessPointUrl + '/' + payload, {headers: this.headers});
  }

  public loginUser(payload){
    return this.http.post(this.accessPointUrl + '/login?username=' + payload.username + '&password=' + payload.password, {headers: this.headers});
  }

  public getUserProfile(payload){
    const tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("token"), 'Content-Type': 'application/json; charset=utf-8' })
    return this.http.get(this.accessPointUrl + '/' + payload + '/details', {headers: tokenHeader});
  }

  public registerUser(payload){
    return this.http.post(this.accessPointUrl+'/register?username='+payload.username, payload, {headers:this.headers});
  }
}
