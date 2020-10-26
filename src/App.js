import React, { useReducer } from 'react';

import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/Fetch/DataFetchingOne';
import DataFetchingTwo from './components/Fetch/DataFetchingTwo';


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const CountContext = React.createContext()
function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (

        <div className="App">
            {/* <CountContext.Provider value = {{countState : count, countDispatch : dispatch}}> */}
            {/* <Counter1/> */}
            {/* <Counter2/> */}
            {/* <Counter3/> */}
            {/* Count = {count}
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
          </CountContext.Provider> */}
            {/* <DataFetchingOne/> */}
            <DataFetchingTwo />
        </div>

    );
}

export default App;
