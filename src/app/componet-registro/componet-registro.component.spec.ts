import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetRegistroComponent } from './componet-registro.component';

describe('ComponetRegistroComponent', () => {
  let component: ComponetRegistroComponent;
  let fixture: ComponentFixture<ComponetRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
