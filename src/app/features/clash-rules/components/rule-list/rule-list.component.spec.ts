import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleListComponent } from './rule-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RuleListComponent', () => {
  let component: RuleListComponent;
  let fixture: ComponentFixture<RuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RuleListComponent],
      providers: [
        {
          provide: HttpClient,
        },
        {
          provide: HttpHandler,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
