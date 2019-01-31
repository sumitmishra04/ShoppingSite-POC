import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestShoppingSite';

  constructor(private appService: AppService) {
  }

  ngOnInit(){
    this.appService.getSubtotal().subscribe(data => console.log(data))
  }

}

