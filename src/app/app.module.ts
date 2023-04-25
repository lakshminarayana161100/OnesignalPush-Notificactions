import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from '@angular/router';
import { DatePipe } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { Contacts } from '@ionic-native/contacts';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
//import { SMS } from '@ionic-native/sms/ngx';
//import {CallNumber} from '@ionic-native/call-number/ngx'

// Import plugin
import { Clipboard } from '@ionic-native/clipboard/ngx';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideStorage(() => getStorage()), provideFirestore(() => getFirestore()),DatePipe,BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SocialSharing,Clipboard,
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
