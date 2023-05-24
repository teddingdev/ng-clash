import { Injectable } from '@angular/core';
import { StoreService } from '../core/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  private get externalControlConfig() {
    return this.storeService.externalControlConfig;
  }

  get host() {
    return this.externalControlConfig.hostname;
  }

  get port() {
    return this.externalControlConfig.port;
  }

  get hostname() {
    return `http://${this.host}:${this.port}`;
  }

  constructor(private storeService: StoreService) {
    console.log('HostService');
  }
}
