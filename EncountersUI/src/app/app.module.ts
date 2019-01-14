import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterListComponent } from './encounter-list/encounter-list.component';
import { EncounterSearchComponent } from './encounter-search/encounter-search.component';



@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    EncounterListComponent,
    EncounterSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
