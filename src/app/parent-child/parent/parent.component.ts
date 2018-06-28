import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName = "Angular 6";

  constructor() { }

  ngOnInit() {
  }

  receivedFromChild = function(received) {
    console.log("Received from child..." + received)
    //this.parcelToParent.emit(received);
    this.myName = received;
  }

}
