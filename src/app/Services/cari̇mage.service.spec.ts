import { TestBed } from '@angular/core/testing';

import { CarİmageService } from './cari̇mage.service';

describe('CarİmageService', () => {
  let service: CarİmageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarİmageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
