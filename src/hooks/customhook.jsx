import { useState,useEffect, useRef } from "react"
function useCustomHook(StartTime){
    
  
  const[text,setTextArea] = useState("")

  const[timeRemaining,setRemainingTime] = useState(StartTime)
  const[IsTimeRunning,setTimeRunning] = useState(false)
  const[word,setWordCount] = useState(0)
  const textRef = useRef(null)

  const handleChnage = (e)=>{
    setTextArea(e.target.value)
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
    setRemainingTime(StartTime)
    setTextArea("")
    textRef.current.disabled = false
    textRef.current.focus()
  }

  const endGame = ()=>{
    setTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }


  const calculateWordCount = (text)=>{
    const wordArr = text.trim().split(" ")
    const filterWord = wordArr.filter(word => word !== "")
    return filterWord.length
  }
  return {text,IsTimeRunning,timeRemaining,handleChnage,textRef,startGame,word}
}

export default useCustomHook
