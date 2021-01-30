import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServicePackComponent } from './detail-service-pack.component';

describe('DetailServicePackComponent', () => {
  let component: DetailServicePackComponent;
  let fixture: ComponentFixture<DetailServicePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailServicePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServicePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
