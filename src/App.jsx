import { useState,useEffect, useRef } from "react"

const App = () => {
  

  return (
    <div>
      <div className="font-typing text-typing-text bg-black text-center p-4">
        <h1 className="text-2xl font-bold m-2">React Typing Game</h1>
        <textarea 
        value={text}  
        name="text"
        className={`border outline-none w-11/12 resize h-56 m-2 p-2 ${!IsTimeRunning ? "bg-disable-cl":"bg-typing-text text-black"}` }
        onChange={handleChnage}
        disabled={!IsTimeRunning}
        ref={textRef}
        />
        <h4 className="font-bold m-2">Remaining Time: {timeRemaining}</h4>
        <button 
      className={`${IsTimeRunning ?"bg-disable-cl":"bg-typing-text text-black"} py-2.5 px-3.5 block mx-auto`}
        onClick={startGame}
        disabled={IsTimeRunning}
        >Start</button>
        <h1 className="text-2xl font-bold m-2">Total Words : {word}</h1>
      </div>
      
    </div>
  )
}

export default App
