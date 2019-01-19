import { Component, OnInit, Input  } from '@angular/core';
import {Encounter} from '../encounter';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-encounter',
  templateUrl: './encounter-modal.component.html',
  styleUrls: ['./encounter-modal.component.scss']
})
export class EncounterModalComponent implements OnInit {
  @Input() encounter: Encounter;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  viewEncounter(content) {
    this.modalService.open(content);
  }

}
