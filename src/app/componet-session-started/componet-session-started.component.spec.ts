import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetSessionStartedComponent } from './componet-session-started.component';

describe('ComponetSessionStartedComponent', () => {
  let component: ComponetSessionStartedComponent;
  let fixture: ComponentFixture<ComponetSessionStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetSessionStartedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetSessionStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
