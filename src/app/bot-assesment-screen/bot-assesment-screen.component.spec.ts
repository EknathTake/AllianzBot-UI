import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAssesmentScreenComponent } from './bot-assesment-screen.component';

describe('BotAssesmentScreenComponent', () => {
  let component: BotAssesmentScreenComponent;
  let fixture: ComponentFixture<BotAssesmentScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotAssesmentScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAssesmentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
