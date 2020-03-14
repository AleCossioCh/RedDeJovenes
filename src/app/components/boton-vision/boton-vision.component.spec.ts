import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonVisionComponent } from './boton-vision.component';

describe('BotonVisionComponent', () => {
  let component: BotonVisionComponent;
  let fixture: ComponentFixture<BotonVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
