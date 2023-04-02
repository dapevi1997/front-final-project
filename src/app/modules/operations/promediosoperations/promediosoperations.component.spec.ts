import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromediosoperationsComponent } from './promediosoperations.component';

describe('PromediosoperationsComponent', () => {
  let component: PromediosoperationsComponent;
  let fixture: ComponentFixture<PromediosoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromediosoperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromediosoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
