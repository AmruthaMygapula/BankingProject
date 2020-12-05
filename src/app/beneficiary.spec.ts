import { Beneficiary } from './beneficiary';

describe('Beneficiary', () => {
  it('should create an instance', () => {
    expect(new Beneficiary("","",0,"","")).toBeTruthy();
  });
});
