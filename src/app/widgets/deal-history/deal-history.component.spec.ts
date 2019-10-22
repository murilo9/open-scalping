import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealHistoryComponent } from './deal-history.component';

describe('DealHistoryComponent', () => {
  let component: DealHistoryComponent;
  let fixture: ComponentFixture<DealHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
