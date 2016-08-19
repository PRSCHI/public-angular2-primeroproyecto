import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2PrimerproyectoAppComponent } from '../app/angular2-primerproyecto.component';

beforeEachProviders(() => [Angular2PrimerproyectoAppComponent]);

describe('App: Angular2Primerproyecto', () => {
  it('should create the app',
      inject([Angular2PrimerproyectoAppComponent], (app: Angular2PrimerproyectoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-primerproyecto works!\'',
      inject([Angular2PrimerproyectoAppComponent], (app: Angular2PrimerproyectoAppComponent) => {
    expect(app.title).toEqual('angular2-primerproyecto works!');
  }));
});
