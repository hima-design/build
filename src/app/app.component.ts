import { Component } from '@angular/core';
import { NbSidebarComponent, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService ){

  }
  title = 'iqShift';

 

  
}
