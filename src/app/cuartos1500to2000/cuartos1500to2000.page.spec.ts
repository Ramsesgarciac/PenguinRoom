import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cuartos1500to2000Page } from './cuartos1500to2000.page';

describe('Cuartos1500to2000Page', () => {
  let component: Cuartos1500to2000Page;
  let fixture: ComponentFixture<Cuartos1500to2000Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuartos1500to2000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cuartos1500to2000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
