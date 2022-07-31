import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferButtonComponent } from './offer-button.component';

describe('OfferButtonComponent', () => {
  let component: OfferButtonComponent;
  let fixture: ComponentFixture<OfferButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
