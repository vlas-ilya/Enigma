import React from 'react';
import ReactDOM from 'react-dom';
import { configureEnigma } from './app/enigma/enigma';
import { hot } from 'react-hot-loader/root';
import { makeRandomEnigmaConfiguration } from './app/helpers/randomEnigmaConfiguration';

const configuration = makeRandomEnigmaConfiguration();

const encryptMachine = configureEnigma(configuration);
const decryptMachine = configureEnigma(configuration);

const openText =
  'HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO';
const encryptedText = encryptMachine(openText);
const decryptedText = decryptMachine(encryptedText);

const App = hot(() => (
  <div>
    <p>
      <span>openText: </span> {openText}
    </p>
    <p>
      <span>encryptedText: </span> {encryptedText}
    </p>
    <p>
      <span>decryptedText: </span> {decryptedText}
    </p>
  </div>
));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
