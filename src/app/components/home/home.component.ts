import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public errorAccess: number = 0
  // public keyAccess : string = '8888'
  constructor() { }

  ngOnInit(): void {
  }
  onAccess(key:string) {
    console.log(key)
    // console.log(localStorage.getItem('keyAccess'))
    // if (key == '888888') {
    //  localStorage.setItem('keyAccess', key)
    // } else {
    //   return this.errorAccess = -1
    // }

  }
}
