import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGenteComponent } from './table-gente.component';

describe('TableGenteComponent', () => {
  let component: TableGenteComponent;
  let fixture: ComponentFixture<TableGenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableGenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
