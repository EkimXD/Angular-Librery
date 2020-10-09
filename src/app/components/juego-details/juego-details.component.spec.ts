import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetailsComponent } from './juego-details.component';

describe('JuegoDetailsComponent', () => {
  let component: JuegoDetailsComponent;
  let fixture: ComponentFixture<JuegoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
