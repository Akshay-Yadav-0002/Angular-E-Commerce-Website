import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category.component';

describe('ViewAllProductsByCategoryComponent', () => {
  let component: ViewAllProductsByCategoryComponent;
  let fixture: ComponentFixture<ViewAllProductsByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProductsByCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewAllProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
