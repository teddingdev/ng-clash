import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLogComponent } from './sys-log.component';

describe('SysLogComponent', () => {
  let component: SysLogComponent;
  let fixture: ComponentFixture<SysLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
