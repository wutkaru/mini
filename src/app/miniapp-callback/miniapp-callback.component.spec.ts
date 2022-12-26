import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniappCallbackComponent } from './miniapp-callback.component';

describe('MiniappCallbackComponent', () => {
  let component: MiniappCallbackComponent;
  let fixture: ComponentFixture<MiniappCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniappCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniappCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
