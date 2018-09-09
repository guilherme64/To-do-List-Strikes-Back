import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  task: Task = {id: 1,title:'Titulo da atividade', description: 'Detalhes desta atividade descrita', completed: false};
  tasks = TASKS;
  editMode = false;
  constructor() { }

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

}
