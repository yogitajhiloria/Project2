import { Project2Page } from './app.po';

describe('project2 App', function() {
  let page: Project2Page;

  beforeEach(() => {
    page = new Project2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
