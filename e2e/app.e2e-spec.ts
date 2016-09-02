import { MigratePage } from './app.po';

describe('migrate App', function() {
  let page: MigratePage;

  beforeEach(() => {
    page = new MigratePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
