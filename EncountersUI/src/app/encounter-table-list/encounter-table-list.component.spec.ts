import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterTableListComponent } from './encounter-table-list.component';

describe('EncounterTableListComponent', () => {
  let component: EncounterTableListComponent;
  let fixture: ComponentFixture<EncounterTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
