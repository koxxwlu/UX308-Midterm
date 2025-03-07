import { gymCost } from '../4gymCost.js'

describe("A suite", function () {
  it("testing 1 friends at $10", function () {
    let value = gymCost(10, 1);
    expect(value).toBe(9.5);
  });
});

describe("A suite", function () {
    it("testing 2 friends at $10", function () {
      let value = gymCost(10, 2);
      expect(value).toBe(9);
    });
  });

  describe("A suite", function () {
    it("testing 3 friends at $10", function () {
      let value = gymCost(10, 3);
      expect(value).toBe(8.5);
    });
  });

  describe("A suite", function () {
    it("testing 4 friends at $100", function () {
      let value = gymCost(100, 4);
      expect(value).toBe(85);
    });
  });