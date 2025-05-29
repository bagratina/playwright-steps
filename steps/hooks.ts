import { Fixtures } from "../types";

export async function startTesting() {
  console.log("Started testing");
}

export async function doCleanup({ ctx }: Fixtures) {
  if (ctx.testId) {
    console.log("Removing testId from context...");
    delete ctx.testId;
  }
}
