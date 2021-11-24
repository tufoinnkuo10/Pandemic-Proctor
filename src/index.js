import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Browser, router } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
import App from './Components/App';
import store from './Redux/configureStore';
import { loadDataThunk } from './Redux/covid/covid';
// import './styles/index.css';

store.dispatch(loadDataThunk());

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
