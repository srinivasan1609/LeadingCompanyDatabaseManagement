import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leading-club-data-management';

  @HostListener('scroll', ['$event']) 
        scrollHandler(event) {
          console.log("Scroll Event");
        }
}
