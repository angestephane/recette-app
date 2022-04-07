import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteListeComponent } from './recette-liste.component';

describe('RecetteListeComponent', () => {
  let component: RecetteListeComponent;
  let fixture: ComponentFixture<RecetteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
