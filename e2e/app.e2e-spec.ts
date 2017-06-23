import { NgFinalProjectPage } from './app.po';

describe('ng-final-project App', () => {
  let page: NgFinalProjectPage;

  beforeEach(() => {
    page = new NgFinalProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
