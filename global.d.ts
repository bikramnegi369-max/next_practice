// Needed to allow importing CSS and other static assets in TypeScript.
// Next.js normally provides these types via `next-env.d.ts`, but when using
// path aliases or custom configurations, TS can sometimes lose them.

declare module "*.css";
