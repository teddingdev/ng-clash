import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashSettingsComponent } from './clash-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsControlComponent } from './components/settings-control/settings-control.component';

describe('ClashSettingsComponent', () => {
  let component: ClashSettingsComponent;
  let fixture: ComponentFixture<ClashSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClashSettingsComponent, SettingsComponent, SettingsControlComponent],
      imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClashSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
