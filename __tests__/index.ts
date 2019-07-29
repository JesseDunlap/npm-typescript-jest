import add from "../src/index";

describe("index", () => {
  it("should add two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});
