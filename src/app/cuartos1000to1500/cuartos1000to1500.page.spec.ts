import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cuartos1000to1500Page } from './cuartos1000to1500.page';

describe('Cuartos1000to1500Page', () => {
  let component: Cuartos1000to1500Page;
  let fixture: ComponentFixture<Cuartos1000to1500Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuartos1000to1500Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cuartos1000to1500Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
