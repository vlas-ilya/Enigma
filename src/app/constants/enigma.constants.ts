import { Letter, Pin } from '../enigma/types';

export const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  ' ',
  '_',
] as Letter[];

export const ROTOR_1_INITIAL_PIN: Pin = 5;
export const ROTOR_2_INITIAL_PIN: Pin = 15;
export const ROTOR_3_INITIAL_PIN: Pin = 9;
export const SWITCHING_PANEL_SIZE: Pin = 6;
