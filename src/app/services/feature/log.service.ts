import { Injectable } from '@angular/core';
import { Subject, catchError, map, of, scan } from 'rxjs';
import { WebsocketService } from '../core/websocket/websocket.service';
import { HostService } from '../api/host.service';
import { Log } from '@model';

enum WSType {
  'debug',
  'info',
  'warn',
  'error',
}

const scanLog = () =>
  scan((accumulator: Log[], seed: Log) => {
    accumulator.unshift(seed);
    return accumulator;
  }, []);

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private debug$ = new Subject<string>();
  private info$ = new Subject<string>();
  private warn$ = new Subject<string>();
  private error$ = new Subject<string>();

  public debugLog: Log[] = [];
  public infoLog: Log[] = [];
  public warnLog: Log[] = [];
  public errorLog: Log[] = [];

  initLog() {
    this.debug$
      .pipe(
        map((log) => JSON.parse(log) as Log),
        map((log) => ({ ...log, time: new Date() })),
        scanLog(),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe((log) => {
        this.debugLog = log;
      });

    this.info$
      .pipe(
        map((log) => JSON.parse(log) as Log),
        map((log) => ({ ...log, time: new Date() })),
        scanLog(),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe((log) => {
        this.infoLog = log;
      });

    this.warn$
      .pipe(
        map((log) => JSON.parse(log) as Log),
        map((log) => ({ ...log, time: new Date() })),
        scanLog(),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe((log) => {
        this.warnLog = log;
      });

    this.error$
      .pipe(
        map((log) => JSON.parse(log) as Log),
        map((log) => ({ ...log, time: new Date() })),
        scanLog(),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe((log) => {
        this.errorLog = log;
      });
  }

  constructor(private hostService: HostService) {
    const host = this.hostService.host;
    const port = this.hostService.port;

    const infoUrl = `ws://${host}:${port}/logs?level=info`;
    const warnUrl = `ws://${host}:${port}/logs?level=warn`;
    const debugUrl = `ws://${host}:${port}/logs?level=debug`;
    const errorUrl = `ws://${host}:${port}/logs?level=error`;

    const wsDebug = new WebsocketService({
      url: debugUrl,
      onmessage: (event) => {
        this.debug$.next(event.data);
      },
    });
    const wsInfo = new WebsocketService({
      url: infoUrl,
      onmessage: (event) => {
        this.info$.next(event.data);
      },
    });
    const wsWarn = new WebsocketService({
      url: warnUrl,
      onmessage: (event) => {
        this.warn$.next(event.data);
      },
    });
    const wsErrorUrl = new WebsocketService({
      url: errorUrl,
      onmessage: (event) => {
        this.error$.next(event.data);
      },
    });

    wsDebug.connected();
    wsInfo.connected();
    wsWarn.connected();
    wsErrorUrl.connected();
  }
}
