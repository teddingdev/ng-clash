import { Injectable } from '@angular/core';
import { ExternalControlConfig } from '@model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  get externalControlConfig(): ExternalControlConfig {
    const defaultHostname = 'localhost';
    const defaultPort = '7891';
    let cachedHostname: string | undefined;
    let cachedPort: string | undefined;
    let cachedKey: string | undefined;
    const cachedConfig = localStorage.getItem('ngClash');
    if (cachedConfig) {
      const ngClashConfig = JSON.parse(cachedConfig);
      const externalControl = ngClashConfig['externalControl'] ?? {};
      cachedHostname = externalControl['hostname'] || defaultHostname;
      cachedPort = externalControl['port'] || defaultPort;
      cachedKey = externalControl['key'];
    }
    return {
      hostname: cachedHostname ?? defaultHostname,
      port: cachedPort ?? defaultPort,
      key: cachedKey ?? '',
    };
  }

  set externalControlConfig(externalControl: ExternalControlConfig | null) {
    if (null) {
      return;
    }
    const cachedConfig = localStorage.getItem('ngClash') ?? '{}';
    const ngClashConfig = JSON.parse(cachedConfig);
    ngClashConfig['externalControl'] = externalControl;
    localStorage.setItem('ngClash', JSON.stringify(ngClashConfig));
  }

  constructor() {}
}
