import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSearchResultComponent } from './bot-search-result.component';

describe('BotSearchResultComponent', () => {
  let component: BotSearchResultComponent;
  let fixture: ComponentFixture<BotSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
