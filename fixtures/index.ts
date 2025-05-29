import { test as base, expect } from "@playwright/test";
import { Context, Fixtures, Step, StepFn } from "../types";

const ctx = async ({}, use: (value: Context) => Promise<void>) => {
  const context = {} as Context;
  await use(context);
};

const st = async (
  { page, ctx }: Fixtures,
  use: (step: Step) => Promise<void>
) => {
  const step = async (description: string, fn: StepFn): Promise<void> => {
    await base.step(description, async () => {
      await fn({ page, ctx, step });
    });
  };

  await use(step);
};

const test = base.extend<Fixtures>({ ctx, step: st });

const { afterEach, beforeEach, describe } = test;

export { test, afterEach, beforeEach, describe, expect };
