import {
  ALPHABET,
  ROTOR_1_INITIAL_PIN,
  ROTOR_2_INITIAL_PIN,
  ROTOR_3_INITIAL_PIN,
  SWITCHING_PANEL_SIZE,
} from '../constants/enigma.constants';

import { EnigmaConfiguration } from '../enigma/types';
import { makeRandomReflectorConfiguration } from './randomReflectorConfiguration';
import { makeRandomRotorConfiguration } from './randomRotorConfiguration';
import { makeRandomSwitchingPanelConfiguration } from './randomSwitchingPanelConfiguration';

export function makeRandomEnigmaConfiguration(): EnigmaConfiguration {
  return {
    letters: ALPHABET,
    rotors: [
      makeRandomRotorConfiguration(ALPHABET.length, ROTOR_1_INITIAL_PIN),
      makeRandomRotorConfiguration(ALPHABET.length, ROTOR_2_INITIAL_PIN),
      makeRandomRotorConfiguration(ALPHABET.length, ROTOR_3_INITIAL_PIN),
    ],
    reflector: makeRandomReflectorConfiguration(ALPHABET.length),
    switchingPanel: makeRandomSwitchingPanelConfiguration(
      ALPHABET.length,
      SWITCHING_PANEL_SIZE,
    ),
  };
}
