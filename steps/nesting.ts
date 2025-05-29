import { Fixtures } from "../types";

export async function myStep({ step }: Fixtures) {
  await step("I can nest my steps in other steps", myNestedStep);
}

export async function myNestedStep({ page, ctx }: Fixtures) {
  await page.goto("http://google.com");

  console.log("Read testId from context: %s", ctx.testId);
}
