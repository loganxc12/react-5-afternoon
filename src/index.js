import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import { Provider } from "react-redux"; //Component that will "provide" the store to our App. Should have a store prop that equals store.
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
     
     <Provider store={store}>
          <App />
     </Provider>

, document.getElementById('root'));
registerServiceWorker();

