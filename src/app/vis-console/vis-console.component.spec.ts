import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisConsoleComponent } from './vis-console.component';

describe('VisConsoleComponent', () => {
  let component: VisConsoleComponent;
  let fixture: ComponentFixture<VisConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
