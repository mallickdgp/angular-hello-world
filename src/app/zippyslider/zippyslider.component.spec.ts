import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippysliderComponent } from './zippyslider.component';

describe('ZippysliderComponent', () => {
  let component: ZippysliderComponent;
  let fixture: ComponentFixture<ZippysliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippysliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
