import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EncounterListComponent} from './encounter-list/encounter-list.component';
import {EncounterSearchComponent} from './encounter-search/encounter-search.component';

const routes: Routes = [
  { path: 'encounter-list', component: EncounterListComponent },
  { path: 'encounter-search', component: EncounterSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
