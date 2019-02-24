import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
                        {path:'index', component: FrontPageComponent},
                        { path: '', redirectTo: '/index', pathMatch: 'full' }];


@NgModule({

  exports: [RouterModule],

  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
