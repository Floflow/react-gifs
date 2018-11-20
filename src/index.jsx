import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import '../assets/stylesheets/application.scss';
<link rel="stylesheet" href="https://www.bootstrapcdn.com/fontawesome/">;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
