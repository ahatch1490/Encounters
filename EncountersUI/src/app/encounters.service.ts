import { Injectable } from '@angular/core';
import { Encounter} from './encounter';
import { Observable, of } from 'rxjs';

export const ENCOUNTERS: Encounter[] = [
  {Id: 1, title: 'title1', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 2, title: 'title2', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 3, title: 'title3', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 4, title: 'title4', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 5, title: 'title5', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 6, title: 'title6', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']},
  {Id: 7, title: 'title7', Description: 'this is a description for title1', Tags: ['tag1', 'tag2']}
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
    console.log(paramater);
    const reg = new RegExp(paramater);

    for (let def of ENCOUNTERS) {
        if (reg.test(def.title)) {
        encounters.push(def); }}
      return encounters;
  }
}
