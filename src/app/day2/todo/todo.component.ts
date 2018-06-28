import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task = ['A', 'B', 'C', 'D'];

  oneTask = "";
  money = 50;
  myDate="11/06/18";

  scores = [10, 8, 5, 2, 6];

  addTask() {
      this.task.push(this.oneTask);
      this.oneTask="";
  }

  removeTask() {
    this.task.pop();
    this.oneTask="";
  }

  constructor() { }

  ngOnInit() {

  }

}
