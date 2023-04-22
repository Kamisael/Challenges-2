import React from 'react';
import { decrement, increment } from './counterReducer';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';

export default function App() {
    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Contador Redux</h1>
            <hr />
            <span>Contador: { counter }</span>
            <button onClick={() => dispatch( increment() )}>+1</button>
            <button onClick={() => dispatch( decrement() )}>-1</button>
        </div>
    );
}
