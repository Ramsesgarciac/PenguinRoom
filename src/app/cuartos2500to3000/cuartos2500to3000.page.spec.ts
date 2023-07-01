import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cuartos2500to3000Page } from './cuartos2500to3000.page';

describe('Cuartos2500to3000Page', () => {
  let component: Cuartos2500to3000Page;
  let fixture: ComponentFixture<Cuartos2500to3000Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuartos2500to3000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cuartos2500to3000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
