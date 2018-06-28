import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from "@angular/animations"

@Component({
  selector: 'app-basicanimation',
  templateUrl: './basicanimation.component.html',
  styleUrls: ['./basicanimation.component.css'],
  animations: [
    trigger("growUpAnimation", [
      state("kid", style({
        color:'pink',
        transform:'scale(1)'
      })),
      state("adult",style({
        color:'red',
        transform:'scale(4)'
      })),
      transition('kid <=> adult', animate('500ms ease-in'))
    ])
  ]
})
export class BasicanimationComponent implements OnInit {

  defaultState:String = 'kid'

  animateNow = function() {    
    this.defaultState = this.defaultState == 'adult' ? 'kid':'adult'
    console.log(this.defaultState)
  }

  constructor() { }

  ngOnInit() {
  }

}
