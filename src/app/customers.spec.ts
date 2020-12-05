import { Customers } from './customers';

describe('Customers', () => {
  it('should create an instance', () => {
    expect(new Customers("","","","",0,"","","",0,"","","",0)).toBeTruthy();
  });
});
