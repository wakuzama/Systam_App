import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {AngularFireModule} from 'angularfire2' ;
// import { Config } from 'ionic-angular/config/config';
import {config} from './Firebase Credintials' ;
import {AngularFireDatabaseModule} from 'angularfire2/database' ;
import { DetailsPage } from '../pages/details/details';
import { RegisterPage } from '../pages/register/register';
import {AngularFireAuthModule} from 'angularfire2/auth' ;
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { AlertController } from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DetailsPage,
    RegisterPage,
    PasswordResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) ,
    AngularFireModule.initializeApp(config) ,
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DetailsPage,
    RegisterPage,
    PasswordResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler , useClass: IonicErrorHandler ,} ,
    
  ]
})
export class AppModule {}
