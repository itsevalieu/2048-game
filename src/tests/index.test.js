import { sayHi } from "../index.js";

describe("sayHi", () => {
  it("returns a greet as a string", () => {
    expect(typeof sayHi()).toBe("string");
  });
  it("returns message", () => {
    const name = "Eva";
    const message = "Eva's the best.";
    expect(sayHi(name, message)).toBe(
      "Hi Eva! Here's my message for you: Eva's the best."
    );
  });
});
