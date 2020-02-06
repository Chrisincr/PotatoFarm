import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpudListComponent } from './spud-list.component';

describe('SpudListComponent', () => {
  let component: SpudListComponent;
  let fixture: ComponentFixture<SpudListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpudListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
