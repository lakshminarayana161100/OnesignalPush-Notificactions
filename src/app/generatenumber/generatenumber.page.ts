import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatenumber',
  templateUrl: './generatenumber.page.html',
  styleUrls: ['./generatenumber.page.scss'],
})
export class GeneratenumberPage implements OnInit {
  

  randomNumber: any;
  number:any
  constructor() { }

  ngOnInit() {
  }
  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    console.log(this.randomNumber)
  
    localStorage.setItem('generatenumber',JSON.stringify(this.randomNumber))
  }

}
