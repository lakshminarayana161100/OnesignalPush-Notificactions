import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Contacts, EmailType, PhoneType ,} from '@capacitor-community/contacts';
//import { CallNumber } from '@ionic-native/call-number/ngx';
//import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  text: string='SmartSwag'
  imgurl:string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFjO6rbNAKcZtfgpqkhnqWGPwcH5hAArN1A&usqp=CAU'
  link: string='https://youtu.be/5BQQM4uvRkw'
  url:string='https://youtu.be/5BQQM4uvRkw'
  

  CopyInputText:any = "https://youtu.be/5BQQM4uvRkw";
  mess: any = "copied successfully"

  
  



  constructor(private socialSharing: SocialSharing,private clipboard: Clipboard) {

    //this.getContacts();
  }

   // Copy
   
   copyString(){
     this.clipboard.copy(this.CopyInputText);
    
    alert(this.mess)
  }


  // pasteText(){
  //   this.clipboard.copy(this.imgurl).then(
  //     (resolve: string) => {
  //        this.imgurl = resolve;
  //        console.log(resolve);
  //      },
  //      (reject: string) => {
  //        console.error('Error: ' + reject);
  //      }
  //    );
  // }

  // shareViaTwitter() {
  //   this.socialSharing.shareViaTwitter('Test twitter sharing',  'https://youtu.be/5BQQM4uvRkw')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  // shareViaFacebook() {
  //   this.socialSharing.shareViaFacebook('Test facebook sharing',  'https://youtu.be/5BQQM4uvRkw')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  // shareViaInstagram() {
  //   this.socialSharing.shareViaInstagram('Test instagram sharing', this.imageUrl)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  // shareViaEmail() {
  //   this.socialSharing.shareViaEmail('Test email sharing', 'sharing', ['lakshminarayana161100@gmail.com'])
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  // shareViaWhatsapp() {
  //   this.socialSharing.shareViaWhatsApp('Test whatsapp sharing', this.imageUrl, 'https://youtu.be/5BQQM4uvRkw')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  // shareViaWhatsappToPhone() {
  //   this.socialSharing.shareViaWhatsAppToPhone(
  //     '+919101085890', 
  //     'Test whatsapp to phone sharing', 
  //     'https://youtu.be/5BQQM4uvRkw')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  // shareViaWhatsappToReceiver() {
  //   this.socialSharing.shareViaWhatsAppToReceiver(
  //     '+91939133', 
  //     'Test whatsapp to phone sharing', 
  //     'https://youtu.be/5BQQM4uvRkw')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

 

  sShare(){
    var options = {
      message: 'smartSwag',
      url: 'https://youtu.be/5BQQM4uvRkw',
     
    };
    this.socialSharing.shareWithOptions(options)
  }




  ShareGeneric(parameter:any){
   
    this.socialSharing.share(this.text, this.link, this.imgurl)
  }
  
  ShareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link)
  }

  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl,this.link )
  }

  SendEmail(){
    this.socialSharing.shareViaEmail(this.text, this.imgurl, ['lakshminarayana161100@gmail.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.text, this.imgurl)
  }

  SendSmS(){
    this.socialSharing.shareViaSMS('hi...','+919391311615')
  }
  

  // shareLink() {
  //   const contact: Contact = this.contacts.pickContact();
  //   const contactFields: ContactField[] = [
  //     new ContactField('mobile', '+123456789', true),
  //     new ContactField('url', 'https://www.example.com', true),
  //   ];
  //   contact.phoneNumbers = contactFields;
  //   contact.urls = contactFields;
  
  //   contact.save().then(
  //     () => {
  //       console.log('Contact saved!', contact);
  //       this.socialSharing.shareWithOptions({
  //         message: 'Check out this link!',
  //        // files: null,
  //         url: 'https://www.example.com',
  //         chooserTitle: 'Share link via'
  //       });
  //     },
  //     (error: any) => console.error('Error saving contact.', error)
  //   );
  // }
   contacts: any[] = [];


  
  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    try {
      const permission = await Contacts.requestPermissions();
      console.log('permission: ', permission.contacts);
      if(!permission?.contacts) return;
      else if(permission?.contacts == 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
            emails: true,
            image: true
          }
        });
        console.log('result: ', result);
        this.contacts = result.contacts;
        console.log(this.contacts);
      }
    } catch(e) {
      console.log(e);
    }
  }

  joinNumbers(array:any) {
    return array.map((x: { number: any; }) => x.number).join(' | ');
  }

  

  async getContact(contactId:any) {
    const new_contact = await Contacts.getContact({
      contactId: contactId,
      projection: {
        name: true,
        phones: true,
        emails: true,
        image: true
      }
    });
    // this.contact = new_contact;
    return new_contact;
  }

 

  async pickContact() {
    const picked_contact = await Contacts.pickContact({
      projection: {
        name: true,
        phones: true,
        emails: true,
        image: true
      }
    });
    // this.contact = picked_contact;
    return picked_contact;
  }
 


}

























// async deleteContact(contactId:any) {
//   await Contacts.deleteContact({ contactId });
//   this.contacts = this.contacts.filter(x => x.contactId != contactId);
// }

  

  // async createContact() {
  //   try {
  //     const result = await Contacts.createContact({
  //       contact: {
  //         name: {
  //           given: 'Banking',
  //           family: ' Technyks'
  //         },
  //         phones: [
  //           {
  //             type: PhoneType.Home,
  //             number: '9101010110',
  //           },
  //           {
  //             type: PhoneType.Work,
  //             number: '9101010111',
  //           }
  //         ],
  //         emails: [
  //           {
  //             type: EmailType.Home,
  //             address: 'bankingtechnyks@gmail.com'
  //           }
  //         ]
  //       }
  //     });
  //     // this.result = result;
  //     const new_contact = await this.getContact(result?.contactId);
  //     // this.contact = new_contact;
  //     this.contacts.push(new_contact?.contact);
  //   } catch(e) {
  //     console.log(e);
  //   }
      
  // }
