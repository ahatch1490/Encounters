import { Component, OnInit } from '@angular/core';
import {EncountersService} from '../encounters.service';
import {EncounterTable} from '../encounter-table';

@Component({
  selector: 'app-encounter-table-search',
  templateUrl: './encounter-table-search.component.html',
  styleUrls: ['./encounter-table-search.component.scss']
})
export class EncounterTableSearchComponent implements OnInit {

  constructor( private encounterService: EncountersService ) { }
  Results: EncounterTable[] = [];
  ngOnInit() {
  }

  searchData(input: HTMLInputElement) {
    let parameter: string;
    this.Results = this.encounterService.searchEncounterTables(parameter);
  }

}
