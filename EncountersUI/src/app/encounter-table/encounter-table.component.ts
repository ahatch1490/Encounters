import {Component, Input, OnInit} from '@angular/core';
import {EncounterTable} from '../encounter-table';

@Component({
  selector: 'app-encounter-table',
  templateUrl: './encounter-table.component.html',
  styleUrls: ['./encounter-table.component.scss']
})
export class EncounterTableComponent implements OnInit {
  @Input() encounterTable: EncounterTable;
  constructor() { }

  ngOnInit() {
  }

}
