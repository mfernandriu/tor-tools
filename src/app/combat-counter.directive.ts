import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[combat-counter-host]',
})
export class CombatCounterDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}