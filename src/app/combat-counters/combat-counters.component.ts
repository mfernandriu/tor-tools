import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { CombatCounterDirective } from '../combat-counter.directive';
import { CombatCounterComponent } from '../combat-counter/combat-counter.component';

@Component({
  selector: 'app-combat-counters',
  templateUrl: './combat-counters.component.html',
  styleUrls: ['./combat-counters.component.css']
})
export class CombatCountersComponent implements OnInit {

  @ViewChild(CombatCounterDirective, {static: true}) combatCounterHost: CombatCounterDirective;
  combatCounterComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CombatCounterComponent);

  addCombatCounter() {
    this.loadComponent()
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.loadComponent()
    } 
  }

  loadComponent() {
    
    const viewContainerRef = this.combatCounterHost.viewContainerRef;     
    const componentRef = viewContainerRef.createComponent(this.combatCounterComponentFactory);
  }
}
