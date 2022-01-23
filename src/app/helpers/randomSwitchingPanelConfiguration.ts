import { Pin, SwitchingPanelConfiguration } from '../enigma/types';

import { makeRandomArray } from './randomArray';
import { zip } from '../utils/zip';

export function makeRandomSwitchingPanelConfiguration(
  lettersCount: number,
  switchesCount: number,
): SwitchingPanelConfiguration {
  const pins = makeRandomArray(lettersCount).slice(0, switchesCount);

  const inputPins = [...pins];
  const outputPins = [...pins];
  outputPins.reverse();

  return zip(inputPins, outputPins).reduce(
    (acc, item) => acc.set(item[0], item[1]),
    new Map<Pin, Pin>(),
  );
}
