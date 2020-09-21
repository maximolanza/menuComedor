import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionDelDiaCardComponent } from './opcion-del-dia-card.component';

describe('OpcionDelDiaCardComponent', () => {
  let component: OpcionDelDiaCardComponent;
  let fixture: ComponentFixture<OpcionDelDiaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionDelDiaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionDelDiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
