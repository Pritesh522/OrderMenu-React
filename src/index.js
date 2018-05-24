import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navapp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navapp />, document.getElementById('root'));

registerServiceWorker();
