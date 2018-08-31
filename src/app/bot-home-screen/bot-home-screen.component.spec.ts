import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotHomeScreenComponent } from './bot-home-screen.component';

describe('BotHomeScreenComponent', () => {
  let component: BotHomeScreenComponent;
  let fixture: ComponentFixture<BotHomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotHomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
