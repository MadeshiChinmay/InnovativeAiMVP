import React from 'react';
import Particles from 'react-particles-js';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './components/reducers'
import 'tachyons';
import thunk from 'redux-thunk'



const store=createStore(reducers,applyMiddleware(thunk));
const particlesOptions = {
    particles: {
      number:{
        value: 80,
        density: {
          enable : true,
          value_area: 800
        }
      },
      move: {
        speed: 3,
      }
    }
  }

ReactDOM.render(
    <div>
    <Particles className='particles'
      params = {particlesOptions}
      />
    <Provider store={store}>
        <div>
            <Router />
        </div>
    </Provider>
    </div>
    ,document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
