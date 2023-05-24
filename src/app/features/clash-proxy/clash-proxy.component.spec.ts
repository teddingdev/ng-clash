import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashProxyComponent } from './clash-proxy.component';

describe('ClashProxyComponent', () => {
  let component: ClashProxyComponent;
  let fixture: ComponentFixture<ClashProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClashProxyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClashProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
