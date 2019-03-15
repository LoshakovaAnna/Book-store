import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducers from './redux/reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();




// var arr = [1,3,5,1,3,5,6,6,6];
/*
  Получить новый массив, состоящий только из
  уникальных значений
*/
// ...
// [1,3,5,6]



// 1. sort, for, i i+1 => splice
// 2. sort, filter i i+1 => true/false
// 3. [], forEach, if includes -> push
// 4. с помощью filter
// var uniqArr = arr.filter((number,i,ar) => ar.indexOf(number) === i);

// 5. через свойства объекта
// var uniq = {};
// arr.forEach(number => {
//   uniq[number] = "";
// });
// var uniqArr = Object.keys(uniq); // => [1,3,5,6];



// Получение количества вхождений элемента в массив 
// var arr = [1, 3, 5, 1, 3, 5, 6, 6, 6];

// var obj = {
//   1: 2,
//   3: 2,
//   5: 2,
//   6: 3
// }

// var counters = {};
// arr.forEach(number => {

//   // if ( number in counters ) {
//   //   counters[number]++;
//   // } else {
//   //   counters[number] = 1
//   // }
//   // или
//   counters[number] = number in counters ? counters[number] + 1 : 1;
//   // или
  
//   // counters[number] = counters[number] || 0;
//   // counters[number]++;
  
// });

// console.log( counters );


