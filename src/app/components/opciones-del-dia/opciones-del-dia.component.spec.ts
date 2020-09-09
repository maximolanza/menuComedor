import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesDelDiaComponent } from './opciones-del-dia.component';

describe('OpcionesDelDiaComponent', () => {
  let component: OpcionesDelDiaComponent;
  let fixture: ComponentFixture<OpcionesDelDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesDelDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
