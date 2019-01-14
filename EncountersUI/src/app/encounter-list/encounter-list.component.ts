import { Component, OnInit } from '@angular/core';
import { Encounter } from '../encounter';
import {EncounterComponent} from '../encounter/encounter.component';
import { EncountersService } from '../encounters.service';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.scss']
})
export class EncounterListComponent implements OnInit {
  public Encounters: Encounter[];

  constructor(private encounterService: EncountersService  ) { }

  ngOnInit(): void {
    this.Encounters = this.encounterService.getEncounters();
  }

}
