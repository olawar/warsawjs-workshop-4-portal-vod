import { PortalVODPage } from './app.po';

describe('portal-vod App', () => {
  let page: PortalVODPage;

  beforeEach(() => {
    page = new PortalVODPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
