import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastShowCardComponent } from './last-show-card.component';

describe('LastShowCardComponent', () => {
  let component: LastShowCardComponent;
  let fixture: ComponentFixture<LastShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastShowCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
