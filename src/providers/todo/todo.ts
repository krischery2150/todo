import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private toDoToBeArchived = [];
  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  getToDos(){
    return this.todos;
  }


  getToArchivedToDos(){
    return this.toDoToBeArchived;
  }

  archiveToDo(toDoIndex){
    let toBeArchived = this.todos[toDoIndex]; // get to do that is being archived
    this.todos.splice(toDoIndex, 1); // remove it from the todo list
    this.toDoToBeArchived.push(toBeArchived) // push that information to the toBeArchived array
  }

  editToDo(todo, toDoIndex){
    this.todos[toDoIndex] = todo;
  }

  addToDo(todo){
    this.todos.push(todo);
  }

}
