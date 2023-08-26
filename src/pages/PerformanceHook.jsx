import React, { memo } from 'react'

/* memo 
- Higher order-component. (HOC)
- Prevent the component re-render unnecessary.
- It takes 2 arguments: one for React Component, one for custom function compare (option). 
- Shallow comparison.
*/

/* useCallback 
- Returns a memorized callback.
- Callback function will re-runs if one of the dependencies has changed.
- Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function” is the reasoning of his teammates.
*/

function PerformanceHook({ name, price, handleChangeBook }) {
  console.log('------------> PerformanceHook render')
  return (
    <div>
      <h2>memo</h2>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <button type="text" onClick={handleChangeBook}>Change book</button>
    </div>
  )
}

// function customEquality(prevProps, nextProps) {
//  return prevProps.price === nextProps.price
// }

// export default memo(PerformanceHook, customEquality)

export default memo(PerformanceHook)

// props: A, B, C, D
// props: A, C (custom)
