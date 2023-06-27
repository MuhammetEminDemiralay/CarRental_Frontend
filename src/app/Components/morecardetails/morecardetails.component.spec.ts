import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorecardetailsComponent } from './morecardetails.component';

describe('MorecardetailsComponent', () => {
  let component: MorecardetailsComponent;
  let fixture: ComponentFixture<MorecardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorecardetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorecardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
