import { useState,useEffect, useRef } from "react"

const App = () => {
  const START_TIME = 15
  
  const[text,setTextArea] = useState({
      typingText:""
  })

  const[timeRemaining,setRemainingTime] = useState(START_TIME)
  const[IsTimeRunning,setTimeRunning] = useState(false)
  const[word,setWordCount] = useState(0)
  const textRef = useRef(null)

  const handleChnage = (e)=>{
    setTextArea({
      typingText: e.target.value
    })
  }

  useEffect(()=>{
    if(IsTimeRunning === true && timeRemaining > 0){
        setTimeout(()=>{
          setRemainingTime(time => time-1)
        },1000) 
      }else{
        endGame()
        
      }
      
  },[timeRemaining,IsTimeRunning])

  const startGame = ()=>{
    setTimeRunning(true)
    setRemainingTime(START_TIME)
    setTextArea({
      typingText: ""
    })
    textRef.current.disabled = false
    textRef.current.focus()
  }

  const endGame = ()=>{
    setTimeRunning(false)
    setWordCount(calculateWordCount(text.typingText))
  }


  const calculateWordCount = (text)=>{
    const wordArr = text.trim().split(" ")
    const filterWord = wordArr.filter(word => word !== "")
    return filterWord.length
  }

  return (
    <div>
      <div className="font-typing text-typing-text bg-black text-center p-4">
        <h1 className="text-2xl font-bold m-2">React Typing Game</h1>
        <textarea 
        value={text.typingText}  
        name="typingText"
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
