import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLoginScreenComponent } from './bot-login-screen.component';

describe('BotLoginScreenComponent', () => {
  let component: BotLoginScreenComponent;
  let fixture: ComponentFixture<BotLoginScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotLoginScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
