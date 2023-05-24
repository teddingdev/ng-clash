import { Component, Input } from '@angular/core';
import { Snapshot } from '@model';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent {
  @Input() connectionList: Snapshot | null = null;

  displayedColumns: string[] = ['host', 'network', 'type', 'chains', 'rule'];
}
