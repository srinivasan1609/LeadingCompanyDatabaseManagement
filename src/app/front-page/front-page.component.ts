import { Component, OnInit,ViewChild} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{FileUploader} from 'ng2-file-upload';
import {ELEMENT_DATA} from '../element.data';
import { ApiCallService } from '../service/api-call.service';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import{MatTableDataSource,MatDialog,MatPaginator,MatSort} from "@angular/material";
import { loanDetailModel } from '../loan-detail-model';
import {FileUploadDialogComponent} from './file-upload-dialog/file-upload-dialog.component'
import { DataSource } from '@angular/cdk/table';
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
  constructor(private apiService:ApiCallService,private http:HttpClient,
    private dialog: MatDialog){}
  ngOnInit(){
   
    this.apiService.fetchData()
      .subscribe( data => {
        console.log(data)
        this.dataSource =new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }); 
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
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
  openDialog(): void {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '350px',
      height: '200px'
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onClick(event){
    console.log(event);
    alert("called");
  }
  displayedColumns: string[] = ['checked','memberId', 'loanAmount', 'fundAmountInv','term','intRate',
                                'installment',"grade","empTitle","empLength",'houseOwnership',
                                'annualInc','verificationStatus','issueDate','loanStatus',
                                 'descn','purpose','title','addrState','lastPymntDate','lastPymntAmnt',
                                 'edit','delete'];
  dataSource:MatTableDataSource<loanDetailModel>;
  resultsLength = 0;
  

  

}
