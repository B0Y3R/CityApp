import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CityApp from './CityApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CityApp />, document.getElementById('root'));
registerServiceWorker();
