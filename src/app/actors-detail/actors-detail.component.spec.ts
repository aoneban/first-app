import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsDetailComponent } from './actors-detail.component';

describe('ActorsDetailComponent', () => {
  let component: ActorsDetailComponent;
  let fixture: ComponentFixture<ActorsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsDetailComponent]
    });
    fixture = TestBed.createComponent(ActorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
