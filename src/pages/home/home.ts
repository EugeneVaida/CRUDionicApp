import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Task } from '../../providers/models/task.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingItems : FirebaseListObservable<any[]>;
  newItem : Task;
  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.shoppingItems = this.firebaseService.getShoppingItems();
    this.newItem = {
      id : null,
      date : '',
      time : '',
      text : ''
    }
    console.log(this.newItem);
  }

  addItem(form : NgForm){
    console.log(form);
    this.firebaseService.addItem(this.newItem);
  }

  removeItem(id){
    this.firebaseService.removeItem(id);
  }

}
