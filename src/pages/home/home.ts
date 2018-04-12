import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { ArchivedToDosPage } from '../../pages/archived-to-dos/archived-to-dos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reOrderEnabled = false;
  constructor(private toastCtrl: ToastController, private todoService: TodoProvider,public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoService.getToDos();
  }

 openToDoAlert(){
   let addTodoAlert = this.alertController.create({
     title: "Add Your Input",
     message: "Enter a message",
     inputs: [{
       type: "text",
       name: "addTodoInput"
     }],
     buttons: [
       {
         text: "Cancel",
         role: "cancel"
       },
       {
         text: "Add To List",
         handler: (data)=>{
           let todoText;
           todoText = data.addTodoInput;
           this.todoService.addToDo(todoText);

           addTodoAlert.onDidDismiss(() =>{
             let addToDoToast = this.toastCtrl.create({
               message: "To Do Added",
               duration: 2000,
             });
             addToDoToast.present()
           })
         }
       },
     ]
   });

   addTodoAlert.present()
 }

 toggleReorder(){
   this.reOrderEnabled = !this.reOrderEnabled
 }

 ionItemReordered($event){
   reorderArray( this.todos, $event);
 }

 goToArchivePage(){
   this.navCtrl.push(ArchivedToDosPage);
 }

 archiveToDo(toDoIndex){
   this.todoService.archiveToDo(toDoIndex);
 }

 editToDo(toDoIndex){
   let editTodoAlert = this.alertController.create({
     title: "Add Your Input",
     message: "Enter a message",
     inputs: [{
       type: "text",
       name: "editTodoInput",
       value: this.todos[toDoIndex]
     }],
     buttons: [
       {
         text: "Cancel",
         role: "cancel"
       },
       {
         text: "Done",
         handler: (data)=>{
           let todoText;
           todoText = data.editTodoInput;
           this.todoService.editToDo(todoText , toDoIndex);

           editTodoAlert.onDidDismiss(() =>{
             let editToDoToast = this.toastCtrl.create({
               message: "To Do was edited",
               duration: 2000,
             });
             editToDoToast.present()
           })
         }
       },
     ]
   });

   editTodoAlert.present()
 }
}
