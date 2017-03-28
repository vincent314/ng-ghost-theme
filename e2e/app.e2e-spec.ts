import { NgGhostThemePage } from './app.po';

describe('ng-ghost-theme App', () => {
  let page: NgGhostThemePage;

  beforeEach(() => {
    page = new NgGhostThemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
