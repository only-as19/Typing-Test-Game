
const App = () => {
  return (
    



    <div>
      <div className="font-typing text-typing-text bg-black text-center p-4">
        <h1 className="text-2xl font-bold m-2">React Typing Game</h1>
        <textarea className="text-black border outline-none bg-typing-text w-11/12 resize h-56 m-2 p-2" />
        <h4 className="font-bold m-2">Remaining Time: </h4>
        <button className="bg-typing-text text-black py-2.5 px-3.5 block mx-auto">Start</button>
        <h1 className="text-2xl font-bold m-2">Total Words</h1>
      </div>
    </div>
  )
}

export default App
