/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}

declare interface anyObject {
  [propName: string]: any;
}

declare type ReactChildren = JSX.Element[] | JSX.Element;