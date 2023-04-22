import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store'; // assuming you have a Redux store set up in a separate file
import App from './reducir';
import TodoApp from './TodoApp';
import { Father } from './Father';


ReactDOM.render(
  <Provider store={store}>
    <Father/>
    <TodoApp/>
    <App />
    
  </Provider>,
  document.getElementById('root')
);
