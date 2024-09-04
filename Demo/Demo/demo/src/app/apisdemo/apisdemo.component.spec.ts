import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisdemoComponent } from './apisdemo.component';
import { CommonModule } from '@angular/common';

describe('ApisdemoComponent', () => {
  let component: ApisdemoComponent;
  let fixture: ComponentFixture<ApisdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApisdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
