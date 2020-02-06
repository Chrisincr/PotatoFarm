import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpudComponent } from './spud.component';

describe('SpudComponent', () => {
  let component: SpudComponent;
  let fixture: ComponentFixture<SpudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
