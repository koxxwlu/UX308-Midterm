import { heightToVolume } from '../3heightToVolume.js'

describe("A suite", function () {
  it("testing 1m", function () {
    let value = heightToVolume(1);
    expect(value).toBe("1m (sqr)");
  });
});

describe("A suite", function () {
  it("testing 3m", function () {
    let value = heightToVolume(3);
    expect(value).toBe("27m (sqr)");
  });
});

describe("A suite", function () {
  it("testing 64m", function () {
    let value = heightToVolume(64);
    expect(value).toBe("262144m (sqr)");
  });
});