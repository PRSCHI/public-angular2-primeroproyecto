export class Angular2PrimerproyectoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-primerproyecto-app h1')).getText();
  }
}
