/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  // Add explicit hook type definitions
  export function useState<T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];
  export function useState<T = undefined>(): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];
  
  export function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  
  // React types
  export type ReactNode = ReactElement | ReactElement[] | string | number | boolean | null | undefined;
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {}
  export type JSXElementConstructor<P> = (props: P) => ReactElement<any, any> | null;
  export type EffectCallback = () => (void | (() => void | undefined));
  export type DependencyList = ReadonlyArray<any>;
}
