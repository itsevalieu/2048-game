import { sayHi } from "../index.js";

test("returns a greet as a string", () => {
  expect(typeof sayHi()).toBe("string");
});
