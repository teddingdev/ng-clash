import { Component, Input } from '@angular/core';
import { Proxy } from '@model';

type ViewModel = 'grid_view' | 'view_list';

@Component({
  selector: 'app-proxy-card',
  templateUrl: './proxy-card.component.html',
  styleUrls: ['./proxy-card.component.scss'],
})
export class ProxyCardComponent {
  @Input() proxies: Proxy[] | null = null;
  @Input() viewModel: ViewModel = 'grid_view';
}
