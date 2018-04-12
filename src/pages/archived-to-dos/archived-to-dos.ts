import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';


/**
 * Generated class for the ArchivedToDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-to-dos',
  templateUrl: 'archived-to-dos.html',
})
export class ArchivedToDosPage {

  public archivedToDos = [];

  constructor(private toDoProvider: TodoProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.archivedToDos = this.toDoProvider.getToArchivedToDos();
  }

}
