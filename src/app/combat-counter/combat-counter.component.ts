import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combat-counter',
  templateUrl: './combat-counter.component.html',
  styleUrls: ['./combat-counter.component.css']
})
export class CombatCounterComponent implements OnInit {

  counterName: string = "character_name"
  @Input() count: number = 20;
  
  decrementCounter() {
    this.count = Number(this.count)
    this.count -= 1
  }

  incrementCounter() {
    this.count = Number(this.count)
    this.count += 1
  }

  constructor() { }

  ngOnInit() {
  }

}
