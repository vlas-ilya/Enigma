import { Callback, Fun } from '../utils/types';

export type Letter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | ' '
  | '_';

export type Pin = number;

export type RotorConfiguration = {
  inputPins: Pin[];
  outputPins: Pin[];
  initialPin: Pin;
};

export type Rotor = {
  passDirectSignal: Fun<Pin>;
  passReflectSignal: Fun<Pin>;
  rotate: Fun<void>;
  onFullTurn: (onFullTurn: Callback) => void;
};

export type ReflectorConfiguration = Map<Pin, Pin>;

export type Reflector = Fun<Pin>;

export type SwitchingPanelConfiguration = Map<Pin, Pin>;

export type SwitchingPanel = Fun<Pin>;

export type EnigmaConfiguration = {
  letters: Letter[];
  rotors: RotorConfiguration[];
  reflector: ReflectorConfiguration;
  switchingPanel: SwitchingPanelConfiguration;
};

export type Enigma = (input: string) => string;
