import { sayHi } from "../index.js";

describe("sayHi", () => {
  it("returns a greet as a string", () => {
    const name = "Eva";
    const message = "Eva's the best.";
    expect(typeof sayHi(name, message)).toBe("string");
    expect(sayHi(name, message)).toBe(
      "Hi Eva! Here's my message for you: Eva's the best."
    );
  });
});
