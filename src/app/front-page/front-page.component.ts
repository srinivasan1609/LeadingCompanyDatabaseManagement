import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{FileUploader} from 'ng2-file-upload';
import {ELEMENT_DATA} from '../element.data';
import { ApiCallService } from '../service/api-call.service';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import{MatTableDataSource} from "@angular/material";
import { loanDetailModel } from '../loan-detail-model';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit{
  uploadForm: FormGroup;
  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  constructor(private apiService:ApiCallService,private http:HttpClient){}
  ngOnInit(){
    
    this.apiService.fetchData()
      .subscribe( data => {
        console.log(data)
        this.dataSource =new MatTableDataSource(data);
      });
     
  }
  uploadSubmit(){
    var formdata = new FormData();
   var fileItem = this.uploader.queue[0]._file;
   console.log(fileItem.name);
   formdata.append('file',fileItem);
   this.uploadFile(formdata).subscribe(data => console.log(data.member));
    console.log("called");
  }
  uploadFile(data: FormData): Observable<any> {
    return this.http.post('/api/upload', data);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = ['member-id', 'loan-amount', 'fund-amount-inv','term','int-rate',
                                'installment',"grade","emp-title","emp-length",'house-ownership',
                                'annual-inc','verification-status','issue-date','loan-status',
                                 'descn','purpose','title','addr-state','last-pymnt-date','last-pymnt-amnt'];
  dataSource:MatTableDataSource<loanDetailModel>;
  resultsLength = 0;

  

}
