import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' : 
            return { ...state, firstCounter : state.firstCounter + action.value}
        case 'decrement' : 
            return { ...state, firstCounter : state.firstCounter - action.value}
        case 'increment2' : 
            return { ...state, secondCounter : state.secondCounter + action.value}
        case 'decrement2' : 
            return { ...state, secondCounter : state.secondCounter - action.value}
        case 'reset1' : 
            return { ...state, firstCounter : initialState.firstCounter }
        case 'reset2' : 
            return { ...state, secondCounter : initialState.secondCounter }
        default : 
            return state
    }
}

function Counter2() {

    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>
                First Counter = {count.firstCounter}
                <button onClick={() => dispatch({type : 'increment',value : 1})}>Increment</button> 
                <button onClick={() => dispatch({type : 'decrement',value : 1})}>Decrement</button>
                <button onClick={() => dispatch({type : 'reset1'})}>Reset</button>
                <button onClick={() => dispatch({type : 'increment',value : 5})}>Increment</button> 
                <button onClick={() => dispatch({type : 'decrement',value : 5})}>Decrement</button>
            </div>
            <div>
                Second Counter = {count.secondCounter}
                <button onClick={() => dispatch({type : 'increment2',value : 1})}>Increment</button> 
                <button onClick={() => dispatch({type : 'decrement2',value : 1})}>Decrement</button>
                <button onClick={() => dispatch({type : 'reset2'})}>Reset</button>
                <button onClick={() => dispatch({type : 'increment2',value : 5})}>Increment</button> 
                <button onClick={() => dispatch({type : 'decrement2',value : 5})}>Decrement</button>
            </div>
           
        </div>
    )
}

export default Counter2
