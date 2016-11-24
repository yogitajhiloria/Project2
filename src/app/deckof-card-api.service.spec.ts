/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeckofCardAPIService } from './deckof-card-api.service';

describe('DeckofCardAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckofCardAPIService]
    });
  });

  it('should ...', inject([DeckofCardAPIService], (service: DeckofCardAPIService) => {
    expect(service).toBeTruthy();
  }));
});
