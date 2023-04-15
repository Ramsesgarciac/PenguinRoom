import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cuartos500to1000Page } from './cuartos500to1000.page';

describe('Cuartos500to1000Page', () => {
  let component: Cuartos500to1000Page;
  let fixture: ComponentFixture<Cuartos500to1000Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuartos500to1000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cuartos500to1000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
