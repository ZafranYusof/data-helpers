declare module 'data-helpers' {
  /** Split array into chunks of specified size */
  export function chunk<T>(array: T[], size: number): T[][];
  
  /** Flatten array one level deep */
  export function flatten<T>(array: (T | T[])[]): T[];
  
  /** Remove duplicate values from array */
  export function unique<T>(array: T[]): T[];
  
  /** Pick specified keys from object */
  export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
  
  /** Omit specified keys from object */
  export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
  
  /** Deep merge multiple objects */
  export function merge<T extends object>(...objects: Partial<T>[]): T;
}