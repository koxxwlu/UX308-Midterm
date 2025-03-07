import { fahrenheitToCelsius } from '../2fahrenheitToCelsius.js'

describe("A suite", function () {
  it("testing boiling (100C, 212F)", function () {
    let value = fahrenheitToCelsius(212);
    expect(value.toFixed(1)).toBe("100.0");
  });
});

describe("A suite", function () {
    it("testing freezing (0C, 32F)", function () {
      let value = fahrenheitToCelsius(32);
      expect(value.toFixed(1)).toBe("0.0");
    });
  });

describe("A suite", function () {
    it("testing room temp. (21.11C, 70F)", function () {
      let value = fahrenheitToCelsius(70);
      expect(value.toFixed(1)).toBe("21.1");
    });
});