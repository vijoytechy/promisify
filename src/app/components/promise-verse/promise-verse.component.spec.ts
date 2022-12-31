import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseVerseComponent } from './promise-verse.component';

describe('PromiseVerseComponent', () => {
  let component: PromiseVerseComponent;
  let fixture: ComponentFixture<PromiseVerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseVerseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
