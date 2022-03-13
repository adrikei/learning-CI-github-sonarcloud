const manifest = require("./manifest");

test("should tell it exists", () => {
  expect(manifest()).toBe("I exist");
});
