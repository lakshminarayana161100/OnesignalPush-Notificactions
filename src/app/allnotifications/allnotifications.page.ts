import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-allnotifications',
  templateUrl: './allnotifications.page.html',
  styleUrls: ['./allnotifications.page.scss'],

  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AllnotificationsPage implements OnInit {


  //items:any = [];

  //myArray: any[] = [];
  notice: any;
  allNotifications: any;
  date: any;
  notificationconut = 0;
  constructor() {
    // const storedItems = localStorage.getItem('InappNotifictions');
    // if (storedItems) {
    //   this.allNotifications = JSON.parse(storedItems);

    // }
  }

  ngOnInit() {

    this.allNotifications = JSON.parse(localStorage.getItem('InappNotifictions') || '{}')

    this.date = new Date().getTime()
    if (this.allNotifications) {
      this.notificationconut = 1
    } else {

      this.notificationconut = 0
    }
    //this.allNotifications.join('');

    //  var notice= this.allNotifications.split(',');
    //  localStorage.setItem('InappNotifictions', JSON.stringify(notice));

    //  this.allNotifications = (localStorage.getItem('InappNotifictions'))


    //console.log(this.allNotifications)
  }
  getTimeStamp() {
    return new Date().toLocaleString();
  }
  clear() {
    localStorage.removeItem('InappNotifictions');
   // localStorage.clear()
  }
}














 // allnotifications() {
  //   this.Notifications.push('lakshmi')
  //   console.log(this.Notifications)
  //   localStorage.setItem('notification', JSON.stringify(this.Notifications))

  //   this.getnotifications = JSON.parse(localStorage.getItem('notification') || '{}')
  //   for (let i = 0; i < this.getnotifications.length; i++) {
  //     var data = this.getnotifications[i]
  //   }
  //   this.Notifications.push(data)
  //   localStorage.setItem('notification', JSON.stringify(this.Notifications))
  //   console.log(data)


  // }




