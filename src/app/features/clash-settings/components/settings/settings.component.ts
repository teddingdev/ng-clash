import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { ClashApiService } from '@service';

import { ClashMode, Config, ExternalControlConfig } from '@model';
import { SettingsControlComponent } from '../settings-control/settings-control.component';
import { StoreService } from 'src/app/services/core/store/store.service';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

function isNonNullable<T>(value: T | null | undefined): value is T {
  return value !== null && value !== void 0;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input()
  set dashboardConfig(value: Config | null) {
    if (value) {
      this.validateForm.reset(value);
    }
  }

  get dashboardConfig() {
    return this._dashboardConfig;
  }

  _dashboardConfig: Config | null = null;

  @Input()
  externalControlConfig: ExternalControlConfig | null = null;

  clashMode = ClashMode;
  validateForm: FormGroup;

  @Output()
  change = new EventEmitter();

  openDialog() {
    const dialogRef = this.dialog.open<
      SettingsControlComponent,
      ExternalControlConfig | null,
      ExternalControlConfig
    >(SettingsControlComponent, {
      width: '600px',
      data: this.externalControlConfig,
    });
    dialogRef
      .afterClosed()
      .pipe(filter(isNonNullable))
      .subscribe((result) => {
        if (result) {
          this.storeService.externalControlConfig = result;
        }
      });
  }

  save() {
    this.clashApiService
      .putConfig(this.validateForm.value)
      .subscribe((res) => {
        if (res === null) {
          this._snackBar.open('success', 'close', {
            duration: 3000,
          });
        } else if (res === void 0) {
          this._snackBar.open('error', 'close', {
            duration: 3000,
          });
        }
      });
  }

  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private storeService: StoreService,
    private clashApiService: ClashApiService
  ) {
    this.validateForm = this.fb.group({
      port: [null],
      mode: [null],
      'socks-port': [null],
      'redir-port': [null],
      'mixed-port': [null],
      'allow-lan': [null],
      'log-level': [null],
    });
  }
}
