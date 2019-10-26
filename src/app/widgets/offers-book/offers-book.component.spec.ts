import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersBookComponent } from './offers-book.component';

describe('OffersBookComponent', () => {
  let component: OffersBookComponent;
  let fixture: ComponentFixture<OffersBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
