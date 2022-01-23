import { Callback, Fun } from './types';

export function bind<T>(...functions: Fun<T>[]) {
  return (onFinish: Callback) =>
    (initValue: T): T => {
      let result = initValue;
      for (const f of functions) {
        result = f(result);
      }
      onFinish && onFinish();
      return result;
    };
}
