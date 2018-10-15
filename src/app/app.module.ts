import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
 
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
  apiKey: "AIzaSyB77gMRAA7sG61KpstvwUUEcuwQG8wnH-Q",
  authDomain: "demoappsplash.firebaseapp.com",
  databaseURL: "https://demoappsplash.firebaseio.com",
  projectId: "demoappsplash",
  storageBucket: "",
  messagingSenderId: "1002068205228"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
