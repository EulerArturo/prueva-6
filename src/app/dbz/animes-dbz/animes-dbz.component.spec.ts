import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesDbzComponent } from './animes-dbz.component';

describe('AnimesDbzComponent', () => {
  let component: AnimesDbzComponent;
  let fixture: ComponentFixture<AnimesDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesDbzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
