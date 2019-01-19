import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterListComponent } from './encounter-list/encounter-list.component';
import { EncounterSearchComponent } from './encounter-search/encounter-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncounterModalComponent } from './encounter/encounter-modal.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    EncounterListComponent,
    EncounterSearchComponent,
    EncounterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EncounterModalComponent]
})
export class AppModule { }
