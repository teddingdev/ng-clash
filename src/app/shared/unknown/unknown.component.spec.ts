import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownComponent } from './unknown.component';
import { RouterModule } from '@angular/router';

describe('UnusualComponent', () => {
  let component: UnknownComponent;
  let fixture: ComponentFixture<UnknownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnknownComponent],
      imports: [RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
