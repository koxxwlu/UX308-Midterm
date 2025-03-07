import { gymCost } from '../4gymCost.js'

describe("A suite", function () {
  it("testing 0 friends at $10", function () {
    let value = gymCost(10, 0);
    expect(value).toBe(10);
  });
});

describe("A suite", function () {
    it("testing 15 friends at $10", function () {
      let value = gymCost(10, 15);
      expect(value).toBe(8.5);
    });
  });

  describe("A suite", function () {
    it("testing 2 friends at $10", function () {
      let value = gymCost(10, 2);
      expect(value).toBe(9);
    });
  });

  describe("A suite", function () {
    it("testing 1 friends at $100", function () {
      let value = gymCost(100, 1);
      expect(value).toBe(95);
    });
  });