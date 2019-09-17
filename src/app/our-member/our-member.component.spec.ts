import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMemberComponent } from './our-member.component';

describe('OurMemberComponent', () => {
  let component: OurMemberComponent;
  let fixture: ComponentFixture<OurMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
