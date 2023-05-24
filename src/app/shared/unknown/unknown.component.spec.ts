import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownComponent } from './unknown.component';

describe('UnusualComponent', () => {
  let component: UnknownComponent;
  let fixture: ComponentFixture<UnknownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
