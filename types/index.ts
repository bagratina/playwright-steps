import { Page } from "playwright/test";

export type Context = Record<string, any>;

export type StepFn = ({ page, ctx, step }: Fixtures) => Promise<void>;

export type Step = (description: string, fn: StepFn) => Promise<void>;

export type Fixtures = {
  page: Page;
  ctx: Context;
  step: Step;
};
