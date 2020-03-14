import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMisionComponent } from './boton-mision.component';

describe('BotonMisionComponent', () => {
  let component: BotonMisionComponent;
  let fixture: ComponentFixture<BotonMisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonMisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
