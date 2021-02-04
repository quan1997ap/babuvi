import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBankComponent } from './edit-user-bank.component';

describe('EditUserBankComponent', () => {
  let component: EditUserBankComponent;
  let fixture: ComponentFixture<EditUserBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
