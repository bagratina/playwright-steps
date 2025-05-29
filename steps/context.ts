import { randomUUID } from "crypto";
import { Fixtures } from "../types";

export async function setTestId({ ctx }: Fixtures) {
  const testId = randomUUID();

  ctx!.testId = testId;

  console.log("Saved testId to context: %s", testId);
}
