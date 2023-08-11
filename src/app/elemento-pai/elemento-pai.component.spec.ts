import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoPaiComponent } from './elemento-pai.component';

describe('ElementoPaiComponent', () => {
  let component: ElementoPaiComponent;
  let fixture: ComponentFixture<ElementoPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementoPaiComponent]
    });
    fixture = TestBed.createComponent(ElementoPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
