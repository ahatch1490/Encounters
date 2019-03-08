import {Component, Input, OnInit} from '@angular/core';
import {EncounterTable} from '../encounter-table';

@Component({
  selector: 'app-encounter-table-list',
  templateUrl: './encounter-table-list.component.html',
  styleUrls: ['./encounter-table-list.component.scss']
})
export class EncounterTableListComponent implements OnInit {

  @Input() encounterTables: EncounterTable[];
  constructor() { }

  ngOnInit() {
  }

}
