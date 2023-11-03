import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OpinionsComponent } from './opinions.component';
import { OpinionsService } from '../opinions.service';

describe('OpinionsComponent', () => {
  let component: OpinionsComponent;
  let fixture: ComponentFixture<OpinionsComponent>;
  let opinionsService: OpinionsService;
  let activatedRoute: ActivatedRoute;

  const mockOpinionData = {
    items: [
      { id: 1, author: 'John', text: 'Some review text', rating: 4 },
      { id: 2, author: 'Alice', text: 'Another review', rating: 5 },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }, // Мок ActivatedRoute
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OpinionsComponent);
    component = fixture.componentInstance;
    opinionsService = TestBed.inject(OpinionsService);
    activatedRoute = TestBed.inject(ActivatedRoute);

    spyOn(opinionsService, 'getOpinionDetails').and.returnValue(of(mockOpinionData));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load opinion details on initialization', () => {
    component.ngOnInit();

    expect(opinionsService.getOpinionDetails).toHaveBeenCalledWith('1');

    expect(component.opinionData).toEqual(mockOpinionData);
  });

  it('should expand and collapse reviews', () => {
    component.toggleDescription(0);
    expect(component.expandedReviews[0]).toBe(true);

    component.toggleDescription(0);
    expect(component.expandedReviews[0]).toBe(false);
  });
});
