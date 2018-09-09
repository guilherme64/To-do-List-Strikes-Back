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
  constructor() { }

  ngOnInit() {
  }

}
