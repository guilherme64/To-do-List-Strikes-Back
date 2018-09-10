import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-list';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  task: Task = new Task();
  tasks: Observable<any>;

  editMode = false;
  constructor(public db: AngularFireDatabase) { 
    this.tasks = db.list('tasks').valueChanges();
  }

  ngOnInit() {
    
  }
  onSelect(task: Task){
    console.log(task.id);
  }
  onDelete(task: Task){
    console.log(task.id+ ' Essa tarefa sera apagada');
  }

  onEdit(task: Task){
    console.log('Essa atividade sera editada');
    this.editMode === true? this.editMode = false : this.editMode = true;
  }
  onSubmitEdit(task: Task){
    console.log(task.id +' Sera editada');
    this.editMode = false;
  }

  onAddTask(task: Task){
    //this.task.title = task.title;
    this.db.list('/tasks').push({title: this.task.title, 
    description: this.task.description, completed: false});
    //this.task.completed = false;
    console.log('tentando adicionar');
    console.log('tamanho');
    let size;
    this.tasks.subscribe(function(result){
      console.log(size = result.length)
    });
    
    console.log(size);
   // this.taskService.addTask(this.task);
  }

  getTasks() {
    
    this.tasks = this.db.list('tasks').valueChanges();
   
  }

}
