import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroperationsComponent } from './navbaroperations.component';

describe('NavbaroperationsComponent', () => {
  let component: NavbaroperationsComponent;
  let fixture: ComponentFixture<NavbaroperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaroperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaroperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
