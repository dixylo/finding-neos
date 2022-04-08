import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoListComponent } from './neo-list.component';

describe('NeoListComponent', () => {
  let component: NeoListComponent;
  let fixture: ComponentFixture<NeoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
