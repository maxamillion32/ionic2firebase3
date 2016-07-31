/*import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);*/

import {LoginPage} from './pages/login/login';
import * as firebase from 'firebase';

import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDvrfwEXb2iyYXud_27tzJZ3Bcer28DkMg",
      authDomain: "fir-auth-d5ba1.firebaseapp.com",
      databaseURL: "https://fir-auth-d5ba1.firebaseio.com",
      storageBucket: "fir-auth-d5ba1.appspot.com",
    };

  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // If there's a user take him to the home page.
      this.rootPage = HomePage;
    } else {
      // If there's no user logged in send him to the LoginPage
      this.rootPage = LoginPage;
    }
  });

    platform.ready().
    then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

  }
}
ionicBootstrap(MyApp);

