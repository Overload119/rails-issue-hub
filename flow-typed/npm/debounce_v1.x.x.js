// flow-typed signature: fe99b6c0c5d86cfa8668f018c677b85e
// flow-typed version: 1d63597087/debounce_v1.x.x/flow_>=v0.83.x

declare module 'debounce' {
  declare type Cancelable = {|
    cancel: () => void,
    flush: () => void
  |};

  declare type Debounce = <T>(func: T, wait: number, immediate?: boolean) => T & Cancelable;

  declare var debounce: Debounce;

  declare module.exports: {|
    <T>(func: T, wait: number, immediate?: boolean): T & Cancelable,
    debounce: Debounce,
  |};
}
