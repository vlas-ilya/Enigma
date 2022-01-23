import { Enigma, EnigmaConfiguration, Letter, Pin } from './types';

import { bind } from '../utils/bind';
import { configureReflector } from './reflector';
import { configureRotor } from './rotor';
import { configureSwitchingPanel } from './switchingPanel';
import { reverse } from '../utils/reverse';

export function configureEnigma(configuration: EnigmaConfiguration): Enigma {
  const rotors = configuration.rotors.map(configureRotor);
  const reflector = configureReflector(configuration.reflector);
  const switchingPanel = configureSwitchingPanel(configuration.switchingPanel);

  for (let i = 1; i < rotors.length; i++) {
    rotors[i - 1].onFullTurn(rotors[i].rotate);
  }

  const passSignal = bind(
    switchingPanel,
    ...rotors.map((rotor) => rotor.passDirectSignal),
    reflector,
    ...reverse(rotors).map((rotor) => rotor.passReflectSignal),
    switchingPanel,
  )(rotors[0].rotate);

  const enigma = (letter: Letter) => {
    const pins = [...Array(configuration.letters.length).keys()] as Pin[];
    const initPin = pins.find((key) => configuration.letters[key] === letter);
    if (initPin === undefined) {
      throw 'Just to calm TS down';
    }
    const resultPin = passSignal(initPin);
    return configuration.letters[resultPin];
  };

  return (word: string) =>
    word
      .split('')
      .map((ch) => enigma(ch as Letter))
      .join('');
}
