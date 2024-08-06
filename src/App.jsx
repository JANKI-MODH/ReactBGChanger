import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200 p-0 rounded-xl" style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
      <div className='flex flex-wrap bg-white px-2 py-2 rounded-full justify-center gap-3 shadow-lg'>
        <button onClick={() => {setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"red"}}> Red </button>

        <button onClick={() => {setColor("pink")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"pink"}}> pink </button>

        <button onClick={() => {setColor("blue")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"blue"}}> blue </button>

        <button onClick={() => {setColor("green")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"green"}}> green </button>

        <button onClick={() => {setColor("tan")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"tan"}}> tan </button>

        <button onClick={() => {setColor("black")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"black"}}> black </button>

        <button onClick={() => {setColor("violet")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"violet"}}> violet </button>

        <button onClick={() => {setColor("gray")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"gray"}}> gray </button>

        <button onClick={() => {setColor("teal")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"teal"}}> teal </button>

        <button onClick={() => {setColor("cyan")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"cyan"}}> cyan </button>

        <button onClick={() => {setColor("maroon")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"maroon"}}> maroon </button>

        <button onClick={() => {setColor("indigo")}}className='outline-none px-4 py-1 rounded-full text-white shadow-sm ' 
        style={{backgroundColor:"indigo"}}> indigo </button>

      </div>
    </div>
   </div>
  
  )
}

export default App
