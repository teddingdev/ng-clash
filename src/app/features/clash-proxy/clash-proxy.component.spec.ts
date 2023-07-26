import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashProxyComponent } from './clash-proxy.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ProxyCardComponent } from './components/proxy-card/proxy-card.component';
import { ProxyGroupComponent } from './components/proxy-group/proxy-group.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

describe('ClashProxyComponent', () => {
  let component: ClashProxyComponent;
  let fixture: ComponentFixture<ClashProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ClashProxyComponent,
        ProxyCardComponent,
        ProxyGroupComponent,
        MatIcon,
      ],
      imports: [MatIconModule, HttpClientModule],
      providers: [
        {
          provide: MatSnackBar,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClashProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
