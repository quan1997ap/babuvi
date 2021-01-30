import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicePackComponent } from './list-service-pack.component';

describe('ListServicePackComponent', () => {
  let component: ListServicePackComponent;
  let fixture: ComponentFixture<ListServicePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServicePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
