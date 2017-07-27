import { Ng4LibraryPage } from './app.po';

describe('ng4-library App', () => {
  let page: Ng4LibraryPage;

  beforeEach(() => {
    page = new Ng4LibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
