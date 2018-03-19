import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose ;

const store = createStore(reducers, composeEnhancers(
   applyMiddleware(thunk)
))

const app = (
   <Provider store={ store } >
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
)

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
