import { TourOfHerosPage } from './app.po';

describe('tour-of-heros App', function() {
  let page: TourOfHerosPage;

  beforeEach(() => {
    page = new TourOfHerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
