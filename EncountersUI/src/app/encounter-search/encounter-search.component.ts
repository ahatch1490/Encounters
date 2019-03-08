import {Component, Input, OnInit} from '@angular/core';
import { Encounter} from '../encounter';
import { EncountersService} from '../encounters.service';

@Component({
  selector: 'app-encounter-search',
  templateUrl: './encounter-search.component.html',
  styleUrls: ['./encounter-search.component.scss']
})
export class EncounterSearchComponent implements OnInit {
  Results: Encounter[] = [];
  constructor( private encounterService: EncountersService ) {}

  ngOnInit() {
  }

  searchData(input: HTMLInputElement ) {
    let parameter: string;
    parameter = input.value;
    this.Results =   this.encounterService.searchEncounters(parameter);
  }

}
