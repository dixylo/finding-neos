import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoDetailComponent } from './neo-detail.component';

describe('NeoDetailComponent', () => {
  let component: NeoDetailComponent;
  let fixture: ComponentFixture<NeoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
