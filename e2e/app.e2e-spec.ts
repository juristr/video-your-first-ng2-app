import { FirstngappPage } from './app.po';

describe('firstngapp App', function() {
  let page: FirstngappPage;

  beforeEach(() => {
    page = new FirstngappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
