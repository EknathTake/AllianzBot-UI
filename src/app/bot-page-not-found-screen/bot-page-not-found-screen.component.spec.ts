import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotPageNotFoundScreenComponent } from './bot-page-not-found-screen.component';

describe('BotPageNotFoundScreenComponent', () => {
  let component: BotPageNotFoundScreenComponent;
  let fixture: ComponentFixture<BotPageNotFoundScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotPageNotFoundScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotPageNotFoundScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
