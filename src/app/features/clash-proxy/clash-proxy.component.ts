import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ClashApiService } from '@service';
import { PolicyGroup, ProxiesProvider, Proxy } from '@model';
import { ClashService } from 'src/app/services/feature/clash.service';
import { Observable, Subject, catchError, map, of, takeUntil, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

type ViewModel = 'grid_view' | 'view_list';

@Component({
  selector: 'app-clash-proxy',
  templateUrl: './clash-proxy.component.html',
  styleUrls: ['./clash-proxy.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClashProxyComponent implements OnInit, OnDestroy {
  providers$: Observable<Record<string, ProxiesProvider> | null>;
  global$: Observable<(Proxy | PolicyGroup)[] | null>;
  proxies$: Observable<Proxy[] | null>;
  policyGroups$: Observable<PolicyGroup[] | null>;

  viewModel: ViewModel = 'grid_view';

  /** 用于取消订阅 */
  stop$ = new Subject();

  toggleViewModel(viewModel: ViewModel) {
    switch (viewModel) {
      case 'grid_view':
        this.viewModel = 'view_list';
        break;
      case 'view_list':
        this.viewModel = 'grid_view';
        break;
      default:
        this.viewModel = 'grid_view';
        break;
    }
  }

  putProxy(data: { proxyName: string; policyName: string }) {
    const { proxyName, policyName } = data;
    this.clashService.putProxy(proxyName, policyName).subscribe((res) => {
      if (res === null) {
        this._snackBar.open('success', 'close', {
          duration: 3000,
        });
      } else if (res === void 0) {
        this._snackBar.open('error', 'close', {
          duration: 3000,
        });
      }
      this.clashService.fetch(new Date().toString());
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stop$.next('stop');
  }

  constructor(
    private _snackBar: MatSnackBar,
    // private ref: ChangeDetectorRef,
    private clashService: ClashService
  ) {
    this.proxies$ = this.clashService.proxies$.pipe(
      map((data) => data.proxies),
      catchError(() => {
        return of([]);
      })
    );
    this.global$ = this.clashService.proxies$.pipe(
      map((data) => data.global),
      catchError(() => {
        return of([]);
      })
    );
    this.policyGroups$ = this.clashService.proxies$.pipe(
      map((data) => data.policyGroups),
      catchError(() => {
        return of([]);
      })
    );
    this.providers$ = this.clashService.fetchProviders();
  }
}
