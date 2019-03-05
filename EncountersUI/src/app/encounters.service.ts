import { Injectable } from '@angular/core';
import { Encounter} from './encounter';
import { Observable, of } from 'rxjs';
import {EncounterTable} from './encounter-table';

export const ENCOUNTERS: Encounter[] = [
  {Id: 1, title: 'title1', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 2, title: 'title2', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 3, title: 'title3', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 4, title: 'title4', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 5, title: 'title5', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 6, title: 'title6', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 7, title: 'title7', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']}
  ];

export const ENCOUNTER_TABLES:  EncounterTable[] = [
  { Id: 12, title: 'Encounter1', Description: 'Test Table1', Tags: [ 'tag1', 'tag2'], Encounters: ENCOUNTERS },
  { Id: 13, title: 'Encounter2', Description: 'Test Table2', Tags: [ 'tag1', 'tag2'], Encounters: ENCOUNTERS },
  { Id: 14, title: 'Encounter3', Description: 'Test Table3', Tags: [ 'tag1', 'tag2'], Encounters: ENCOUNTERS },
  ];

@Injectable({
  providedIn: 'root'
})
export class EncountersService {

  constructor() { }


  getEncounters(): Encounter[] {
    return ENCOUNTERS;
  }

  getEncounter(Id: number): Encounter {
    for (let def of ENCOUNTERS) {
      if (def.Id === Id ) {
        return def; }}
    return null;
  }

  searchEncounters(paramater: string): Encounter[] {
    const encounters: Encounter[] = [];
    const reg = new RegExp(paramater);

    for (let def of ENCOUNTERS) {
        if (reg.test(def.title)) {
        encounters.push(def); }}
      return encounters;
  }
  getEncounterTables(paramater): EncounterTable[] {
    const encounterTables: EncounterTable[] = [];
    const reg = new RegExp(paramater);

    for (let def of ENCOUNTER_TABLES) {
      for (let tag of def.Tags) {
        if (reg.test(tag)) {
          encounterTables.push(def);
        }
      }
    }
    return encounterTables;
  }
}
