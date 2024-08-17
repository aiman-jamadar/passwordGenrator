import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'





function App() {  
  const [length,setLength]=useState(8)
  const [password,setPassword]=useState("")
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const passwordGenerator=useCallback(()=>{
  let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVDXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str+="12345678"
if(charAllowed)str+="*&^%$#@!"
for(let i=1;i<=length;i++)
  {
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
},[length,charAllowed,numberAllowed,setPassword])
useEffect(()=>{
passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])
const passwordRef=useRef(null)
const copyclick=()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,19)
window.navigator.clipboard.writeText(password)
}

  return (
   <>
   <div className='w-full bg-black'>
   <div className='py-4 max-sm px-3'>password  Generator
    <div className=' py-4 text-red-600'>
      <input type='text'
      value={password}
    placeholder='password'
      
      className='bg-white py-1 px-1'
      ref={passwordRef}
      readOnly/>
      <button className='px-2 py-1 bg-blue-400 box-border' onClick={copyclick}>Copy</button>
    </div>
    <div className='mx-0'>
      <input type='range'
      max={100}
      min={6}
      value={length}
      onChange={(e)=>{setLength(e.target.value)}}
      className='bg-blue-700'
      />
      <label className='px-2' >Length {length}</label>
      <input type='checkbox'
      defaultChecked={numberAllowed}
      onChange={()=>{
        setNumberAllowed((prev)=>!prev);
      }}
      />
      <label>Number</label>
      <input type='checkbox'
      defaultChecked={numberAllowed}
      onChange={()=>{
        setChar((prev)=>!prev);
      }}
      className='mx-1'/>
      <label>Character</label>
    </div>
   </div>
   </div>
   </>
  )
}

export default App








