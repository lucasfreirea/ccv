import { NewsPage } from './../pages/news/news';
import { LivePage } from './../pages/live/live';
import { LocationPage } from './../pages/location/location';
import { EmailComposer } from '@ionic-native/email-composer';
import { GoogleMaps } from '@ionic-native/google-maps';
import { ContactPage } from './../pages/contact/contact';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsPage } from '../pages/events/events';
import { RegisterGcPage } from '../pages/register-gc/register-gc';
import { RegisterVolunteePage } from '../pages/register-volunteer/register-volunteer';
import { TheChurchPage } from '../pages/the-church/the-church';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    LocationPage,
    LivePage,
    NewsPage,
    EventsPage,
    RegisterGcPage,
    RegisterVolunteePage,
    TheChurchPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    LocationPage,
    LivePage,
    NewsPage,
    EventsPage,
    RegisterGcPage,
    RegisterVolunteePage,
    TheChurchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
