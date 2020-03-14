import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonObjetivosComponent } from './boton-objetivos.component';

describe('BotonObjetivosComponent', () => {
  let component: BotonObjetivosComponent;
  let fixture: ComponentFixture<BotonObjetivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonObjetivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
