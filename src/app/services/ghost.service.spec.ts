import { TestBed, inject } from '@angular/core/testing';

import { GhostService } from './ghost.service';
import { RestangularModule } from 'ng2-restangular';
import { BrowserModule } from '@angular/platform-browser';

describe('GhostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RestangularModule, BrowserModule],
      providers: [GhostService]
    });
  });

  it('should fix image URL', inject([GhostService], (service: GhostService) => {
    const html = '<img src="/content/images/2017/03/any-image.jpg"/>';

    expect(service.fixImageUrl(html)).toBe('<img src="http://localhost:2368/content/images/2017/03/any-image.jpg"/>');
  }));
});
