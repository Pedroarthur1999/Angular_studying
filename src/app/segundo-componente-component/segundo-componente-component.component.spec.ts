import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoComponenteComponentComponent } from './segundo-componente-component.component';

describe('SegundoComponenteComponentComponent', () => {
  let component: SegundoComponenteComponentComponent;
  let fixture: ComponentFixture<SegundoComponenteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoComponenteComponentComponent]
    });
    fixture = TestBed.createComponent(SegundoComponenteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
