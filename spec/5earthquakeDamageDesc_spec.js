import { damageDesc } from '../5earthquakeDamageDesc.js'

describe("A suite", function () {
  it("testing scale of 1", function () {
    let value = damageDesc(1);
    expect(value).toBe("Little or no damage");
  });
});

describe("A suite", function () {
    it("testing scale of 5", function () {
      let value = damageDesc(5);
      expect(value).toBe("Some damage");
    });
  });

  describe("A suite", function () {
    it("testing scale of 7.2", function () {
      let value = damageDesc(7.2);
      expect(value).toBe("Disaster: buildings may collapse");
    });
  });
  
  describe("A suite", function () {
    it("testing scale of 6.8", function () {
      let value = damageDesc(6.8);
      expect(value).toBe("Disaster: buildings may collapse");
    });
  });

  describe("A suite", function () {
    it("testing scale of 10", function () {
      let value = damageDesc(10);
      expect(value).toBe("Catastrophe: most buildings destroyed");
    });
  });