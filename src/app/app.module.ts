import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FileUploadDialogComponent } from './front-page//file-upload-dialog/file-upload-dialog.component';
import { ApiCallService } from './service/api-call.service';
import { ScrollEventModule } from 'ngx-scroll-event';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FileUploadDialogComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollEventModule,
    ScrollingModule,
    MatSortModule
    
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent],
  entryComponents: [FileUploadDialogComponent]
})
export class AppModule { }
