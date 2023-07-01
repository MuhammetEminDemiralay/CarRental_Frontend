import { TestBed } from '@angular/core/testing';

import { CarModelService } from './carmodel.service';

describe('CarModelService', () => {
  let service: CarModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
