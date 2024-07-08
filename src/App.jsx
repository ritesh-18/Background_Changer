import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor]=useState('olive')
  

  return (
    <>
     <div className='w-full h-screen   duration-200' style={{backgroundColor:color}}><p className='text-3xl '>BackGround Changer</p> 
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex justify-center bg-white p-2 rounded-3xl gap-4'>
          <button className='outline-none px-4 py-2= bg-red-500 rounded-xl' onClick={setcolor=>setColor('red')}> Red</button>
          <button className='outline-none px-4 py-2= bg-blue-500 rounded-xl' onClick={setcolor=>setColor('blue')}> Blue</button>
          <button className='outline-none px-4 py-2= bg-green-500 rounded-xl' onClick={setcolor=>setColor('green')}> Green</button>
          <button className='outline-none px-4 py-2= bg-yellow-500 rounded-xl' onClick={setcolor=>setColor('yellow')}> Yellow</button>
          <button className='outline-none px-4 py-2= bg-black text-white rounded-xl'onClick={setcolor=>setColor('black')}> Black</button>
          <button className='outline-none px-4 py-2= bg-white border-b-gray-800 rounded-xl'onClick={setcolor=>setColor('white')}>White</button>
          <button className='outline-none px-4 py-2= bg-purple-500 rounded-xl'onClick={setcolor=>setColor('purple')}>Purple</button>
         
        </div>
      </div>
     </div>
    </>
  )
}

export default App
