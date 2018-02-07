import { AboutComponent } from './../components/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { PagesItemDetailsComponent } from '../pages/pages-item-details/pages-item-details';
import { HomeShowPage } from '../pages/home-show/home-show';
import { ContactComponent } from '../components/contact/contact';

const COMPONENT = [
    HomePage,
    HomeShowPage,
    ListPage,
    PagesItemDetailsComponent,
    HelloIonicPage,
    AboutComponent,
    ContactComponent
];
@NgModule({
  declarations: [
    MyApp,
    ...COMPONENT,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...COMPONENT
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
