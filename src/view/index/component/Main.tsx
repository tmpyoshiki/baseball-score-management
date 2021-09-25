import React, { useState } from 'react';

const Main = (): JSX.Element => {
  const [count, setCount] = useState(1)
  return (
  <>
    <h1>{count}</h1>
    <button type="button" onClick={() => setCount(count+1)}>piyopiyo</button>
    <p>fugafuga</p>
  </>
  )
};
export default Main;