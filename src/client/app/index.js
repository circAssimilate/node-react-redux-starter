import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/styles.css'
import App from './components/App'

import { Provider } from 'react-redux';
import redux from './store'

ReactDOM.render(
  <Provider store={redux}>
    <App />
  </Provider>,
  document.getElementById('root')
);
