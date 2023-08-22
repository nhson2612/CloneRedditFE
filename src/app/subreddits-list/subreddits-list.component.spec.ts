import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditsListComponent } from './subreddits-list.component';

describe('SubredditsListComponent', () => {
  let component: SubredditsListComponent;
  let fixture: ComponentFixture<SubredditsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubredditsListComponent]
    });
    fixture = TestBed.createComponent(SubredditsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
