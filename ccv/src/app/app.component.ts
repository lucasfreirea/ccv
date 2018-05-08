import { LivePage } from './../pages/live/live';
import { LocationPage } from './../pages/location/location';
import { ContactPage } from './../pages/contact/contact';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPage } from '../pages/news/news';
import { EventsPage } from '../pages/events/events';
import { RegisterGcPage } from '../pages/register-gc/register-gc';
import { RegisterVolunteePage } from '../pages/register-volunteer/register-volunteer';
import { TheChurchPage } from '../pages/the-church/the-church';
import { BibleReadingsPage } from '../pages/bible-readings/bible-readings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TheChurchPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'A Igreja', component: TheChurchPage },
      { title: 'Cadastro para GC', component: RegisterGcPage },
      { title: 'Cadastro Voluntários', component: RegisterVolunteePage },
      { title: 'Contato', component: ContactPage },
      { title: 'Eventos', component: EventsPage },
      { title: 'Leituras Biblícas', component: BibleReadingsPage },
      { title: 'Localização', component: LocationPage },
      { title: 'Notícias', component: NewsPage },
      { title: 'Tv Videira', component: LivePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
