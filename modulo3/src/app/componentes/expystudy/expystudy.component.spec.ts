import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpystudyComponent } from './expystudy.component';

describe('ExpystudyComponent', () => {
  let component: ExpystudyComponent;
  let fixture: ComponentFixture<ExpystudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpystudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpystudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
