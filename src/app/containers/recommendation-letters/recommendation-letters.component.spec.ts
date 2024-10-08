import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationLettersComponent } from './recommendation-letters.component';

describe('RecommendationLettersComponent', () => {
  let component: RecommendationLettersComponent;
  let fixture: ComponentFixture<RecommendationLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationLettersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
