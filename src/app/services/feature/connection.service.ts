import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Subject, map, pipe, scan } from 'rxjs';

import { WebsocketService } from '../core';
import { HostService } from '../api/host.service';
import { Snapshot } from '@model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private connection$ = new Subject<Snapshot>();
  connectionList: Snapshot | null = null;

  initConnection() {
    this.connection$.subscribe((data) => {
      this.connectionList = data;
    });
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private hostService: HostService) {
    const host = this.hostService.host;
    const port = this.hostService.port;

    const connectionUrl = `ws://${host}:${port}/connections`;
    if (isPlatformBrowser(platformId)) {
      const wsConnection = new WebsocketService({
        url: connectionUrl,
        onmessage: (event) => {
          let data = null;
          try {
            data = JSON.parse(event.data) as Snapshot;
          } catch (error) {
            console.log(error);
          }
          if (data) {
            this.connection$.next(data);
          }
        },
      });
      wsConnection.connected();
    }
  }
}
