import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Application from './components/Application.js';
import './styles/Application.css';

ReactDOM.render(
  <Application title="The GitHub Cards App" />,
  document.getElementById('root')
);

serviceWorker.unregister();
