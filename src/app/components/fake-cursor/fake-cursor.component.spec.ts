import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeCursorComponent } from './fake-cursor.component';

describe('FakeCursorComponent', () => {
  let component: FakeCursorComponent;
  let fixture: ComponentFixture<FakeCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeCursorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
