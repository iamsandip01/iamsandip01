import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPrductComponent } from './buy-prduct.component';

describe('BuyPrductComponent', () => {
  let component: BuyPrductComponent;
  let fixture: ComponentFixture<BuyPrductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyPrductComponent]
    });
    fixture = TestBed.createComponent(BuyPrductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
