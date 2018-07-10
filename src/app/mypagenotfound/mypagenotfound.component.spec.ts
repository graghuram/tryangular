import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypagenotfoundComponent } from './mypagenotfound.component';

describe('MypagenotfoundComponent', () => {
  let component: MypagenotfoundComponent;
  let fixture: ComponentFixture<MypagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
