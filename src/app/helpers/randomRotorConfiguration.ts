import { RotorConfiguration } from '../enigma/types';
import { makeRandomArray } from './randomArray';
import { transpose } from '../utils/transpose';

export function makeRandomRotorConfiguration(
  lettersCount: number,
  initialPin: number,
): RotorConfiguration {
  const pins = makeRandomArray(lettersCount);
  const inputPins = [...pins];
  const outputPins = transpose(pins);

  return { inputPins, outputPins, initialPin };
}
