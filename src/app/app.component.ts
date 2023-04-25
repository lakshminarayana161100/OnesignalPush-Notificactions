import { Component } from '@angular/core';
import { Platform, AlertController, } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import OneSignal from 'onesignal-cordova-plugin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  AllNotifications: any[] = [];

  created!: number;
  date: any
  OneSignal: any;
  OrderTime: any;
  currenttime: any;
  navCtrl: any;
  body: any
  key: any;



  constructor(platform: Platform, private router: Router, private alertCtrl: AlertController,) {

    platform.ready().then(() => {
      this.OneSignalInit();
    });

    const storedItems = localStorage.getItem('InappNotifictions');
    if (storedItems) {
      this.AllNotifications = JSON.parse(storedItems);

    }


  }
  ngOnInit() {


  }
  // Call this function when your app starts
  OneSignalInit(): void {
    // Uncomment to set OneSignal device logging to VERBOSE  
    // OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId("79da642e-49a6-4af9-8e6e-252680709d15");

    OneSignal.setNotificationWillShowInForegroundHandler((jsonData) => {

      console.log("narayana" + JSON.stringify(jsonData))
      var a = JSON.stringify(jsonData)
      var v = JSON.parse(a)

      this.AllNotifications.push(v.notification.body);
      localStorage.setItem('InappNotifictions', JSON.stringify(this.AllNotifications));
      console.log('trukappp' + localStorage.getItem('InappNotifictions'))
      // this show Inapp notifications
      alert(v.notification.title + v.notification.body)

      alert(localStorage.getItem('InappNotifictions'))
    })

    //localStorage.setItem('InappNotifictions', v.notification.body)

    //localStorage.setItem('InappNotifictions', JSON.stringify(v.notification.body));



    // let notification: any = [] = JSON.parse(localStorage.getItem('allnotification') || '{}');  
    // localStorage.setItem('allnotification', JSON.stringify(notification));



    OneSignal.setNotificationOpenedHandler((jsonData) => {

      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      //var additionalData = jsonData.notification.additionalData;
      //alert(additionalData)
      var a = JSON.stringify(jsonData)
      var v = JSON.parse(a)
      alert(v.notification.title + v.notification.body + v.notification.additionalData.key)
      //alert(JSON.stringify(v))
      //var created= this.date
      this.AllNotifications.push(v.notification.body);
      localStorage.setItem('InappNotifictions', JSON.stringify(this.AllNotifications));

      console.log('trukappp' + localStorage.getItem('InappNotifictions'))


      switch (v.notification.additionalData.key) {
        case "client":
          this.router.navigate(["generatenumber"]);
          break;
        case "provider":
          this.router.navigate(["geolocation"]);
          break;
        default:
          this.router.navigate(["storeimage"]);
      }

      // this show  notifications
      // alert(v.notification.title + v.notification.body )

      //alert(localStorage.getItem('InappNotifictions'))
    });

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
      console.log("User accepted notifications: " + accepted);
    });
  }



}
