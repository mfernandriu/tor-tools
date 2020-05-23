import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombatCountersComponent } from './combat-counters/combat-counters.component';
import { CombatCounterComponent } from './combat-counter/combat-counter.component';
import { CombatCounterDirective } from './combat-counter.directive';

@NgModule({
  declarations: [
    AppComponent,
    CombatCountersComponent,
    CombatCounterComponent,
    CombatCounterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CombatCounterComponent],
})
export class AppModule { }
