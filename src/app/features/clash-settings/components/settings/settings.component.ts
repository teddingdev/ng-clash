import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ClashApiService } from '@service';

import { ClashMode, Config, ExternalControlConfig } from '@model';
import { SettingsControlComponent } from '../settings-control/settings-control.component';
import { filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeyValue } from '@angular/common';
import { HostService } from 'src/app/services/api/host.service';

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
    this._dashboardConfig = value;
  }

  get dashboardConfig() {
    return this._dashboardConfig;
  }

  _dashboardConfig: Config | null = null;

  @Input()
  externalControlConfig: ExternalControlConfig | null = null;

  @Output()
  updateDashboardConfig = new EventEmitter();

  clashMode = ClashMode;
  validateForm: FormGroup;

  @Output()
  change = new EventEmitter();

  openDialog() {
    const dialogRef = this.dialog.open<SettingsControlComponent, ExternalControlConfig | null, ExternalControlConfig>(
      SettingsControlComponent,
      {
        width: '600px',
        data: this.externalControlConfig,
      }
    );
    dialogRef
      .afterClosed()
      .pipe(filter(isNonNullable))
      .subscribe((result) => {
        if (result) {
          this.hostService.externalControlConfig = result;
        }
      });
  }

  save() {
    const { mode, ...rest } = this.validateForm.value;
    this.clashApiService
      .patchConfig({
        ...rest,
        mode: ClashMode[mode as keyof typeof ClashMode],
      })
      .subscribe((res) => {
        if (res === null) {
          this._snackBar.open('success', 'close', {
            duration: 3000,
          });
          // 重置表单默认值为此时ui中的数据,此操作将影响保存按钮的颜色
          this.validateForm.reset(this.validateForm.value);
          this.updateDashboardConfig.emit('');
        } else if (res === void 0) {
          this._snackBar.open('error', 'close', {
            duration: 3000,
          });
        }
      });
  }

  KVCompareFn<K extends string, V extends string>(a: KeyValue<K, V>, b: KeyValue<K, V>): number {
    return 0;
  }

  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private hostService: HostService,
    private clashApiService: ClashApiService
  ) {
    this.validateForm = this.fb.group({
      port: [null],
      'socks-port': [null],
      'redir-port': [null],
      'tproxy-port': [null],
      'mixed-port': [null],
      'allow-lan': [null],
      'bind-address': [null],
      'log-level': [null],
      mode: [null],
      ipv6: [null],
    });
  }
}
