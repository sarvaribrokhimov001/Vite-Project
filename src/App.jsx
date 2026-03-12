import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data , setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Products')
    .then(data => console.log(data.data))
  } , [])

  return (
    <div className='bg-blue-600'>
      <h1 className='text-center text-[40px]'>Hello vite</h1>
    </div>
  )
}

export default App