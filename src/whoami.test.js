const whoami = require("./whoami");

test("should recognize itself as code", () => {
  expect(whoami()).toBe("I am code");
});
