import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {loanDetailModel} from '../loan-detail-model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiUrl = 'http://localhost:8090/index';
  constructor(private http:HttpClient) { }
  private dataUrl ="/api/index";
  public getData() {
    debugger;
    console.log (this.http.get<String>(this.dataUrl));
    return this.http.get(this.dataUrl,{responseType:'text'});
  }
  public postData(String){
    return this.http.post<String>(this.dataUrl+"/upload","post call");
  }
  public fetchData() {
    return this.http.get<loanDetailModel[]>("/api/fetch");

  }

}
