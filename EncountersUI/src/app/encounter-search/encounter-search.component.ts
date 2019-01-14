import { Component, OnInit } from '@angular/core';
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

  searchData(paramater: string ) {
    this.Results =   this.encounterService.searchEncounters(paramater);
  }

}
