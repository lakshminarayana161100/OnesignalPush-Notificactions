import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  item: any = [];
  OriginLocation: any;
  DestinationLocation: any;
  date: any;
  data: any;
  expectedPrice: any;
  Quantity: any;
  product: any;
  typeOfPay: any;


  Name: any;
  PhoneNumber: any;
  Query: any;
  Email: any
  Items: any;
  To: any;

  type: any;
  ss: any;
  hide = 'no';
  selectedItem: any;


  constructor(private alertController: AlertController, public atrCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.type = JSON.parse(localStorage.getItem('typeofpay') || '{}')
    console.log(this.type)
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'You will receive a call from our customer care with in 24 hours',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            //you can write your code or redirection 
            // sample redirection code 
            //window.location.href = '/contact-us';
            this.router.navigate(['/contact-us']);


          }
        }

      ],
    });

    await alert.present();
  }


  // addContact() {
  //   var data = {
  //     Name: this.Name,
  //     PhoneNumber:this.PhoneNumber,
  //     To:this.To,
  //     Query:this.Query
  //   }
  //   console.log(data)
  //   localStorage.setItem("newpostAdd", JSON.stringify(data));

  //   fetch("http://localhost:3000/contact/addcontact", {
  //     method: 'post',
  //     headers: {
  //       "access-Control-Allow-Origin": "*",
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify(data),

  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result),
  //         this.Items = result  

  //     }

  //     ).catch(err =>
  //       console.log(err))
  //       this.email();
  // }



  // email() {
  //   var data = {
  //     To:this.To,   
  //     Name: this.Name,
  //     PhoneNumber:this.PhoneNumber,
  //     Query:this.Query

  //   }
  //   console.log(data)

  //   fetch("http://localhost:3000/contact/emailnotification", {
  //     method: 'post',
  //     headers: {
  //       "access-Control-Allow-Origin": "*",
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify(data),

  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result),
  //         this.Items = result  

  //     }

  //     ).catch(err =>
  //       console.log(err))
  // }


  get() {
    fetch("http://localhost:3000/quotes/allQuotes", {
      method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",

      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.item = result.Loads
        console.log(this.item)
      }

      ).catch(err =>
        console.log(err))
  }
  typeofPay(data: any) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      this.ss = data[i]
      console.log(this.ss)
    }
    localStorage.setItem("typeofpay", JSON.stringify(this.ss));

  }


  async showConfirmAlert() {
  
      let alertConfirm = await this.atrCtrl.create({
        header: 'alter',
        message: '<ion-icon name="call"></ion-icon> <br> Do you want to make a call <br>',

        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('No clicked');
             // this.router.navigate(['/contact-us']);
            }
          },
          {
            text: 'Yes',
            handler: () => {
              const phoneNumber = '91+9391311615';
              const link = document.createElement('a');
              link.setAttribute('href', 'tel:' + phoneNumber);
              link.setAttribute('target', '_system');
              document.body.appendChild(link);
              link.click();
              link.remove();
            }

          }
        ]
      });
      alertConfirm.present();
    

      //localStorage.setItem("contactDetails", JSON.stringify(data));
    }
  }

 

  

  


