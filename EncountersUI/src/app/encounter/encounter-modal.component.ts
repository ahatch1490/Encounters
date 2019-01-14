import { Component, OnInit, Input  } from '@angular/core';
import {Encounter} from '../encounter';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterModalComponent implements OnInit {
  @Input() encounter: Encounter;
  constructor() { }

  ngOnInit() {

  }

}
