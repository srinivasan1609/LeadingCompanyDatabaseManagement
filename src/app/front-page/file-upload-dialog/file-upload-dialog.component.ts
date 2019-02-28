import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import{FileUploader} from 'ng2-file-upload';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  constructor( private dialogRef:MatDialogRef<FileUploadDialogComponent>,@Inject(MAT_DIALOG_DATA) public data : any,private http:HttpClient) { }

  ngOnInit() {
  }

  onCancelClick(){
    this.dialogRef.close();
  }

  uploadSubmit(){
    var formdata = new FormData();
   var fileItem = this.uploader.queue[0]._file;
   console.log(fileItem.name);
   formdata.append('file',fileItem);
   this.dialogRef.close();
   this.uploadFile(formdata).subscribe(data => console.log(data.member));
  }
  uploadFile(data: FormData): Observable<any> {
    return this.http.post('/api/upload', data);
  }
}
