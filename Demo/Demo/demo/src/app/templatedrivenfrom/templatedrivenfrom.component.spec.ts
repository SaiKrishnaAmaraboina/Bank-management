import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenfromComponent } from './templatedrivenfrom.component';

describe('TemplatedrivenfromComponent', () => {
  let component: TemplatedrivenfromComponent;
  let fixture: ComponentFixture<TemplatedrivenfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedrivenfromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
