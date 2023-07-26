import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsControlComponent } from './settings-control.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

describe('SettingsControlComponent', () => {
  let component: SettingsControlComponent;
  let fixture: ComponentFixture<SettingsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SettingsControlComponent, MatCardActions, MatFormField, MatLabel,
        MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter
      ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
