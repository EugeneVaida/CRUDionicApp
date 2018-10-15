import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }


  getShoppingItems(){
    return this.afd.list('/shoppingItems/');
  }

  addItem(name){
    this.afd.list('/shoppingItems/').push(name);
  }

  removeItem(id){
    this.afd.list('/shoppingItems/').remove(id);
  }

}
