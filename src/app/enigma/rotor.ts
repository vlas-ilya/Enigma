import { Pin, Rotor, RotorConfiguration } from './types';

import { Callback } from '../utils/types';

export const configureRotor = ({
  inputPins,
  outputPins,
  initialPin,
}: RotorConfiguration): Rotor => {
  let onFullTurnCallback: Callback;
  let offset = 1;

  const passDirectSignal = (pin: Pin) => {
    return inputPins[(initialPin + offset + pin) % inputPins.length];
  };

  const passReflectSignal = (pin: Pin) => {
    return (
      (2 * inputPins.length + outputPins[pin] - initialPin - offset) % inputPins.length
    );
  };

  const rotate = () => {
    offset += 1;
    if (offset >= inputPins.length) {
      offset = 0;
      onFullTurnCallback && onFullTurnCallback();
    }
  };

  const onFullTurn = (callback: Callback) => {
    onFullTurnCallback = callback;
  };

  return {
    passDirectSignal,
    passReflectSignal,
    rotate,
    onFullTurn,
  };
};
