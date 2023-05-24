import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashSettingsComponent } from './clash-settings.component';

describe('ClashSettingsComponent', () => {
  let component: ClashSettingsComponent;
  let fixture: ComponentFixture<ClashSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClashSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClashSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
