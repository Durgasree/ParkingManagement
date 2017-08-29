import { ParkingMgmtPage } from './app.po';

describe('parking-mgmt App', () => {
  let page: ParkingMgmtPage;

  beforeEach(() => {
    page = new ParkingMgmtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
