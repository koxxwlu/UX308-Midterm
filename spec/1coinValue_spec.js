import { coinValue } from '../1coinValue.js'

describe("A suite", function () {
  it("testing zero of ea.", function () {
    let value = coinValue(0, 0, 0, 0, 0);
    expect(value).toBe(0);
  });
});

describe("A suite", function () {
  it("testing one of ea.", function () {
    let value = coinValue(1, 1, 1, 1, 1);
    expect(value).toBe(3.4);
  });
});

describe("A suite", function () {
  it("testing random num. of ea.", function () {
    let value = coinValue(17, 58, 19, 59, 0);
    expect(value).toBe(70.4);
  });
});