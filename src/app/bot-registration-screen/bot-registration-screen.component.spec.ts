import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotRegistrationScreenComponent } from './bot-registration-screen.component';

describe('BotRegistrationScreenComponent', () => {
  let component: BotRegistrationScreenComponent;
  let fixture: ComponentFixture<BotRegistrationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotRegistrationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotRegistrationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
