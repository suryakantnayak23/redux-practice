import { createStore } from 'redux';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Reducer function
  const counterReducer = (state = { counter: 0 }, action) => {
   if( action.type==='increment') 
   {return { counter: state.counter + 1 };}
if(action.type==='decrement')
   return  { counter: state.counter - 1 };

  };

  // Creating Redux store
  const store = createStore(counterReducer);

  // Subscriber function
  const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState); // Log state to console
  };

  store.subscribe(counterSubscriber);

  // Dispatch an action
  store.dispatch({ type: 'increment' }); //dispatch function will take only object
  store.dispatch({type:'decrement'})

  return (
    <>
      <h1>Hi Redux</h1>
    </>
  );
}

export default App;
