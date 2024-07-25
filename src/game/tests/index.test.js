import { sum } from "..";

describe("sum", () => {
  it("should add two numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });
  it("should return a number", () => {
    expect(typeof sum(2, 2)).toBe("number");
  });
});
