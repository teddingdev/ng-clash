import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLogComponent } from './sys-log.component';
import {
  MatTab,
  MatTabBody,
  MatTabGroup,
  MatTabsModule,
} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SysLogComponent', () => {
  let component: SysLogComponent;
  let fixture: ComponentFixture<SysLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysLogComponent, MatTab, MatTabGroup, MatTabBody],
      imports: [BrowserAnimationsModule, MatTabsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SysLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
