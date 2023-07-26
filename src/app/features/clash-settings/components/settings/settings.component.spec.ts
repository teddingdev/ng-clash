import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {
  MatButtonToggleGroup,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SettingsComponent,
        MatCardContent,
        MatFormField,
        MatLabel,
        MatInput,
        MatFabButton,
        MatButtonToggleGroup
      ],
      imports: [
        MatDialogModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonToggleModule,
        FormsModule, NoopAnimationsModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatSnackBarModule, HttpClientModule, MatCardModule, MatSlideToggleModule, MatButtonToggleModule, MatFormFieldModule, MatButtonModule, MatIconModule
      ],
      providers: [
        {
          provide: HttpClient,
        },
        {
          provide: HttpHandler,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
