import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaOperationsComponent } from './grafica-operations.component';

describe('GraficaOperationsComponent', () => {
  let component: GraficaOperationsComponent;
  let fixture: ComponentFixture<GraficaOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
