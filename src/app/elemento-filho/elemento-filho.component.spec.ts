import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoFilhoComponent } from './elemento-filho.component';

describe('ElementoFilhoComponent', () => {
  let component: ElementoFilhoComponent;
  let fixture: ComponentFixture<ElementoFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementoFilhoComponent]
    });
    fixture = TestBed.createComponent(ElementoFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
