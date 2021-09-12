import React from 'react';
import ReactDOM from 'react-dom';
//  import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import TodoList from './todoList'
  const AppComment=(
      <Provider store={store}>
          <TodoList/>
      </Provider>    
  )

    ReactDOM.render(AppComment, document.getElementById('root'))


   


