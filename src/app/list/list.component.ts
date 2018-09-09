import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  task = {title:'Titulo da atividade', description: 'Detalhes desta atividade descrita'}
  constructor() { }

  ngOnInit() {
  }

}
