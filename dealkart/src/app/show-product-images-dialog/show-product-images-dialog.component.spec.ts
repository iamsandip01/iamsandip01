import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductImagesDialogComponent } from './show-product-images-dialog.component';

describe('ShowProductImagesDialogComponent', () => {
  let component: ShowproductImagesDialogComponent;
  let fixture: ComponentFixture<ShowproductImagesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowproductImagesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowproductImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
