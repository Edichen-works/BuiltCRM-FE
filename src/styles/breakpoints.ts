export enum Breakpoints {
  lg = 898,
  elg = 1200,
  emd = 1006,
  esm = 636,
}

export type BreakPointName = keyof typeof Breakpoints;

const createMatch = (size: BreakPointName): string => {
  return `(min-width: ${Breakpoints[size]}px)`;
};

export const matchBreakpoint = (size: BreakPointName): boolean => {
  if (typeof matchMedia !== "function") return false;
  return matchMedia(createMatch(size)).matches;
};

export const mq = (size: BreakPointName): string =>
  `@media ${createMatch(size)}`;
