import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterListComponent } from './encounter-list/encounter-list.component';
import { EncounterSearchComponent } from './encounter-search/encounter-search.component';
import { EncounterModalComponent } from './encounter/encounter-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import {FormsModule} from '@angular/forms';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';
import { EncounterTableComponent } from './encounter-table/encounter-table.component';
import { EncounterTableSearchComponent } from './encounter-table-search/encounter-table-search.component'

@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    EncounterListComponent,
    EncounterSearchComponent,
    EncounterModalComponent,
    EncounterTableComponent,
    EncounterTableSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Angular2FontawesomeModule,
    FormsModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      // config options 1
      useValue: {}
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EncounterModalComponent]
})
export class AppModule { }
