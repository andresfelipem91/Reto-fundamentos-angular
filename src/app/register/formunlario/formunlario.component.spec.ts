import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormunlarioComponent } from './formunlario.component';

describe('FormunlarioComponent', () => {
  let component: FormunlarioComponent;
  let fixture: ComponentFixture<FormunlarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormunlarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormunlarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
