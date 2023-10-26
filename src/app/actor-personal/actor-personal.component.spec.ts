import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPersonalComponent } from './actor-personal.component';

describe('ActorPersonalComponent', () => {
  let component: ActorPersonalComponent;
  let fixture: ComponentFixture<ActorPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorPersonalComponent]
    });
    fixture = TestBed.createComponent(ActorPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
