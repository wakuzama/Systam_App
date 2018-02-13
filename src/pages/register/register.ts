import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {loginData} from '../../model/interface/login';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase, } from 'angularfire2/database';
import  {AngularFireDatabaseModule} from 'angularfire2/database' ;
import {AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   
  registerdata ={"username":"", "password":""} ;
  constructor(public navCtrl: NavController, public navParams: NavParams , private database : AngularFireDatabase , private firebase:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
     
  register(){
      console.log("Button is worked") ;

      this.firebase.auth.createUserWithEmailAndPassword(this.registerdata.username,this.registerdata.password).then(result=>{
      
        console.log('data is',result);
        
     });

  }
}
