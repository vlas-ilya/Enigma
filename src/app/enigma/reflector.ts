import { Reflector, ReflectorConfiguration } from './types';

export function configureReflector(configuration: ReflectorConfiguration): Reflector {
  return (pin) =>
    // eslint-disable-next-line
    configuration.get(pin)!;
}
