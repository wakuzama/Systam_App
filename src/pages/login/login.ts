import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { loginData } from '../../model/interface/login';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase, } from 'angularfire2/database';
import  {AngularFireDatabaseModule} from 'angularfire2/database' ;
import {DetailsPage} from '../details/details' ;
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { PasswordResetPage } from '../password-reset/password-reset';
import { error } from '@firebase/database/dist/esm/src/core/util/util';
import { AlertController } from 'ionic-angular';
import { FormBuilder,FormGroup,Validator,AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { AngularFireDatabase, FirebaseListObservable } from 'AngularFire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // logindata = {} as loginData ;

  // loginDataRef$ :any ;
  
  values ={"username":"", "password":""} ;

  formgroup :FormGroup;
  username :AbstractControl ;
  password : AbstractControl ;
  // password :AbstractControl ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private database: AngularFireDatabase  , private fire: AngularFireAuth,private alertCtrl: AlertController ,
    private formbuilder:FormBuilder) {

    // this.loginDataRef$ =this.database.list('login-data') ;
     this.formgroup = formbuilder.group({
       username:['',Validators.required],
       password:['',Validators.required]
     });

     this.username= this.formgroup.controls['username'] ;
     this.password= this.formgroup.controls['password'] ;

  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // login(logindata:loginData ){

  //   console.log(logindata) ;
  //   this.loginDataRef$.push({

  //     username:this.logindata.username ,
  //     password :this.logindata.password ,
      
  //   })
        
  // }
  //    auht(){
  //     this.detailsloginRef$.subscribe(result=>{
  //       console.log(result) ;
  //       console.log("its work");
    
  //     })

  // }
 
  register(){
    this.navCtrl.push(RegisterPage) ;
  }

  login1(values){
    console.log(values);
  try{
  this.fire.auth.signInWithEmailAndPassword(values.value.username, values.value.password).then(result=>{
   console.log(result);
   if(result){
   this.navCtrl.push(DetailsPage) ;
   }
  },
  (err)=>{
        var alert = this.alertCtrl.create({
        title: 'Error Validation',
         subTitle: 'Enter your correct email and Password ',
        buttons: ['ok']
     });
     alert.present();
    }
  );
  } 


  catch (e){
    console.log(e) ;

  }
}
  password1(){
    this.navCtrl.push(PasswordResetPage) ;
  }
}




// loginUser(): void {
//   if (!this.loginForm.valid){
//     console.log(this.loginForm.value);
//   } else {
//     this.authProvider.loginUser(this.loginForm.value.email, 
//       this.loginForm.value.password)
//     .then( authData => {
//       this.loading.dismiss().then( () => {
//         this.navCtrl.setRoot(HomePage);
//       });
//     }, error => {
//       this.loading.dismiss().then( () => {
//         let alert = this.alertCtrl.create({
//           message: error.message,
//           buttons: [
//             {
//               text: "Ok",
//               role: 'cancel'
//             }
//           ]
//         });
//         alert.present();
//       });
//     });
//     this.loading = this.loadingCtrl.create();
//     this.loading.present();
//   }
// }