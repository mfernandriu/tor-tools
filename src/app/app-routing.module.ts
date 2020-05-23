import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatCountersComponent } from './combat-counters/combat-counters.component'

const routes: Routes = [
  { path: '', component: CombatCountersComponent },
  { path: 'combat-counters', component: CombatCountersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
