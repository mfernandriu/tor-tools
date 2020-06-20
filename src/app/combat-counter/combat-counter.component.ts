import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combat-counter',
  templateUrl: './combat-counter.component.html',
  styleUrls: ['./combat-counter.component.css']
})
export class CombatCounterComponent implements OnInit {

  counterName: string = "character_name"
  @Input() count: number = 20;
  damage: number = 3
  parry: number = 3
  armour: number = 3
  ad: number = 5
  ap: number = 3
  position: string = "open"

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
