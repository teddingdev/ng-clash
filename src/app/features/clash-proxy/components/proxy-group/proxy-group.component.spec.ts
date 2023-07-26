import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyGroupComponent } from './proxy-group.component';
import { MatExpansionModule } from '@angular/material/expansion';

describe('ProxyGroupComponent', () => {
  let component: ProxyGroupComponent;
  let fixture: ComponentFixture<ProxyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProxyGroupComponent],
      imports: [MatExpansionModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProxyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
