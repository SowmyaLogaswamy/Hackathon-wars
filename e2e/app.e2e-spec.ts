import { HackathonWarPage } from './app.po';

describe('hackathon-war App', () => {
  let page: HackathonWarPage;

  beforeEach(() => {
    page = new HackathonWarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
