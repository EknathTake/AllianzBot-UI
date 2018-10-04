import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAdminPanelComponent } from './bot-admin-panel.component';

describe('BotAdminPanelComponent', () => {
  let component: BotAdminPanelComponent;
  let fixture: ComponentFixture<BotAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
