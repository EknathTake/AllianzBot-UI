import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAssesmentResultScreenComponent } from './bot-assesment-result-screen.component';

describe('BotAssesmentResultScreenComponent', () => {
  let component: BotAssesmentResultScreenComponent;
  let fixture: ComponentFixture<BotAssesmentResultScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotAssesmentResultScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAssesmentResultScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
