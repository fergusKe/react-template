import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './containers';

import './index.css';
import './css/base.scss';


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers', () => {
    render();
  });
}
