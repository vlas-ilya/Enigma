import { SwitchingPanel, SwitchingPanelConfiguration } from './types';

export function configureSwitchingPanel(
  configuration: SwitchingPanelConfiguration,
): SwitchingPanel {
  return (pin) => configuration.get(pin) ?? pin;
}
