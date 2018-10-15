import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingItems : FirebaseListObservable<any[]>;
  newItem = '';
  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.shoppingItems = this.firebaseService.getShoppingItems();
  }

  addItem(name){
    this.firebaseService.addItem(this.newItem);
  }

  removeItem(id){
    this.firebaseService.removeItem(id);
  }

}
