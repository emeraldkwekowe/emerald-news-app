import { omitNullishFields, reduceTextSize } from "./functions";

describe("omitNullishFields function test", () => {
  it("should return object without nullish params", () => {
    expect(
      omitNullishFields({ param1: false, param2: null, param3: 0 })
    ).toEqual({
      param1: false,
      param3: 0,
    });
  });
});

describe("reduceTextSize function test", () => {
  it("should return trimmed down text", () => {
    expect(
      reduceTextSize(
        "Watch how these 6 planets orbit their star in perfect sync",
        25
      )
    ).toEqual("Watch how these 6 planets...");
  });
});
