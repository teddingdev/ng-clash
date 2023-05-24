import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyCardComponent } from './proxy-card.component';

describe('ProxyCardComponent', () => {
  let component: ProxyCardComponent;
  let fixture: ComponentFixture<ProxyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
