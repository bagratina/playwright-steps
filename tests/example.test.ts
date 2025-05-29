import { describe, afterEach, beforeEach, test } from "../fixtures";
import { doCleanup, myStep, setTestId, startTesting } from "../steps";
import { Fixtures } from "../types";

describe("Showning how steps can be used in Playwright tests", () => {
  beforeEach(async ({ step }: Fixtures) => {
    await step("I start testing", startTesting);
    await step("I set testId", setTestId);
  });

  test("I can define test with steps", async ({ step }: Fixtures) => {
    await step("I can implement some step and call it from test", myStep);
    await step("I can reuse my step multiple times", myStep);
  });

  afterEach(async ({ step }: Fixtures) => {
    await step("Do some cleanup", doCleanup);
  });
});
