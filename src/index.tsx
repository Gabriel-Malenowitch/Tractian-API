import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

export function reload(){
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}
reload()