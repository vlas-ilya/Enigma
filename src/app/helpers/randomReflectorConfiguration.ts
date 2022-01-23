import { Pin, ReflectorConfiguration } from '../enigma/types';

import { makeRandomArray } from './randomArray';
import { zip } from '../utils/zip';

export function makeRandomReflectorConfiguration(
  lettersCount: number,
): ReflectorConfiguration {
  const reflectorConfiguration = makeRandomArray(lettersCount);

  const inputPins = [...reflectorConfiguration];
  const outputPins = [...reflectorConfiguration];
  outputPins.reverse();

  return zip(inputPins, outputPins).reduce(
    (acc, item) => acc.set(item[0], item[1]),
    new Map<Pin, Pin>(),
  );
}
