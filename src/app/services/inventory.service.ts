import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44360/api/inventories';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public retrieveAll(){
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public retrieveById(payload){
    return this.http.get(this.accessPointUrl + '/' + payload, {headers: this.headers});
  }
}
