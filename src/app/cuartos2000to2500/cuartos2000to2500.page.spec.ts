import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cuartos2000to2500Page } from './cuartos2000to2500.page';

describe('Cuartos2000to2500Page', () => {
  let component: Cuartos2000to2500Page;
  let fixture: ComponentFixture<Cuartos2000to2500Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuartos2000to2500Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cuartos2000to2500Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
