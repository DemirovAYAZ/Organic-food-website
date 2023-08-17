import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import { store } from './Store/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { getTotals } from './Slice/CartSlice';

const rootElement = document.getElementById('root');
store.dispatch(getTotals())



const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
