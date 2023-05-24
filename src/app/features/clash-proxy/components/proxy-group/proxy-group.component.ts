import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { PolicyGroup } from '@model';

@Component({
  selector: 'app-proxy-group',
  templateUrl: './proxy-group.component.html',
  styleUrls: ['./proxy-group.component.scss'],
})
export class ProxyGroupComponent {
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Input() policyGroups: PolicyGroup[] | null = null;

  @Output() onPutProxy = new EventEmitter<{
    policyName: string;
    proxyName: string;
  }>();

  handlePutProxy(policyName: string, proxyName: string) {
    this.onPutProxy.emit({
      policyName,
      proxyName,
    });
  }
}
