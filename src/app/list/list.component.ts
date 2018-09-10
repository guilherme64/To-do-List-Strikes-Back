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
  task: Task = new Task;
  tasks: any = TASKS;
  editMode = false;
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getTasks();
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
    
    this.task.completed = false;
    console.log('tentando adicionar');
    console.log(this.task.title);
    this.taskService.addTask(this.task);
  }

  getTasks() {
    this.tasks = this.db.list('tasks').valueChanges();
  }

}
