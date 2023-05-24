import { Component } from '@angular/core';
import { ConnectionService } from 'src/app/services/feature/connection.service';

@Component({
  selector: 'app-clash-links',
  templateUrl: './clash-links.component.html',
  styleUrls: ['./clash-links.component.scss'],
})
export class ClashLinksComponent {
  get connectionList() {
    return this.connectionService.connectionList;
  }

  constructor(private connectionService: ConnectionService) {}
}
