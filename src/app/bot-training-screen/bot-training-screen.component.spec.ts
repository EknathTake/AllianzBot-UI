import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotTrainingScreenComponent } from './bot-training-screen.component';

describe('BotTrainingScreenComponent', () => {
  let component: BotTrainingScreenComponent;
  let fixture: ComponentFixture<BotTrainingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotTrainingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotTrainingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
