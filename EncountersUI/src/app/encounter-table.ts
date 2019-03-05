import {Encounter} from './encounter';

export class EncounterTable {
  Id: number;
  title: string;
  Description: string;
  Tags: string[];
  Encounters: Encounter[];
}
