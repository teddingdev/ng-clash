import { Component } from '@angular/core';
import { Log } from '@model';
import { map, scan } from 'rxjs/operators';
import { LogService } from 'src/app/services/feature/log.service';

const scanLog = () =>
  scan((accumulator: Log[], seed: Log) => {
    accumulator.unshift(seed);
    return accumulator;
  }, []);

@Component({
  selector: 'app-clash-logs',
  templateUrl: './sys-log.component.html',
  styleUrls: ['./sys-log.component.scss'],
})
export class SysLogComponent {
  get debugLog() {
    return this.logService.debugLog;
  }
  get infoLog() {
    return this.logService.infoLog;
  }
  get warnLog() {
    return this.logService.warnLog;
  }
  get errorLog() {
    return this.logService.errorLog;
  }

  constructor(private logService: LogService) {
  }
}
