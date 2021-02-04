import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWithdrawalRequestComponent } from './edit-withdrawal-request.component';

describe('EditWithdrawalRequestComponent', () => {
  let component: EditWithdrawalRequestComponent;
  let fixture: ComponentFixture<EditWithdrawalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWithdrawalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWithdrawalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
