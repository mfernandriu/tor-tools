import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatCountersComponent } from './combat-counters.component';

describe('CombatCountersComponent', () => {
  let component: CombatCountersComponent;
  let fixture: ComponentFixture<CombatCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
