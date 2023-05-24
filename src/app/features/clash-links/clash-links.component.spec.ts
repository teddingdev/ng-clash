import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashLinksComponent } from './clash-links.component';

describe('ClashLinksComponent', () => {
  let component: ClashLinksComponent;
  let fixture: ComponentFixture<ClashLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClashLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClashLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
