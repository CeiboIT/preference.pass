import { PreferencePassPage } from './app.po';

describe('preference-pass App', () => {
  let page: PreferencePassPage;

  beforeEach(() => {
    page = new PreferencePassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
