import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dbPath = '/tasks';
  tasks: AngularFireList<Task> = null;

  constructor(private db: AngularFireDatabase) { 
    this.tasks = db.list(this.dbPath);
  }
   addTask(task: Task): void {
     console.log('tentando mandar pro firebase');
    this.tasks.push(task);
  }
  getTasks(): AngularFireList<Task>{
    //return 
  }
 
}
