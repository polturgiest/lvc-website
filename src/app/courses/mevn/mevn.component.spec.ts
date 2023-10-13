import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MevnComponent } from './mevn.component';

describe('MevnComponent', () => {
  let component: MevnComponent;
  let fixture: ComponentFixture<MevnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MevnComponent]
    });
    fixture = TestBed.createComponent(MevnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
