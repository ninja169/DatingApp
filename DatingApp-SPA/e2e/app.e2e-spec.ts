import { DatingAppSPAPage } from './app.po';

describe('dating-app-spa App', () => {
  let page: DatingAppSPAPage;

  beforeEach(() => {
    page = new DatingAppSPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
