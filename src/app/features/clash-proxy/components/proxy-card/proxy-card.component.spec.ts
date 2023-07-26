import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyCardComponent } from './proxy-card.component';
import { MatCard, MatCardActions } from '@angular/material/card';

describe('ProxyCardComponent', () => {
  let component: ProxyCardComponent;
  let fixture: ComponentFixture<ProxyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProxyCardComponent, MatCardActions, MatCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProxyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
