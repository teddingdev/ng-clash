import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  hostname?: string;
  port?: string;
  key?: string;
}

@Component({
  selector: 'app-settings-control',
  templateUrl: './settings-control.component.html',
  styleUrls: ['./settings-control.component.scss'],
})
export class SettingsControlComponent {
  validateForm: FormGroup;

  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    this.dialogRef.close(this.validateForm.value);
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SettingsControlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.validateForm = this.fb.group({
      hostname: [],
      port: [],
      key: [],
    });
    this.validateForm.patchValue(this.data);
  }
}
