import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnRouterAngular';
  constructor(
    // inject router nhu 1 service
    public routerService: Router,

  ){}
  navigate(url: string) {
    // sd navigate
    // this.routerService.navigate([url]);
    // sd navigateByUrl
    this.routerService.navigateByUrl(url)
  }

}
