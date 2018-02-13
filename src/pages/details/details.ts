import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { loginData } from '../../model/interface/login';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase,} from 'angularfire2/database';
import  {AngularFireDatabaseModule} from 'angularfire2/database' ;
import { FirebaseDatabase } from '@firebase/database-types';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  // detailsloginRef$ : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams ,  private database: AngularFireDatabase) {

    // this.detailsloginRef$ =this.database.list('login-data') ;

    // this.detailsloginRef$.subscribe(result=>console.log(result) );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
