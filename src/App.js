import Dice from "./components/dice"

export default function App() {
  
  return (
    <section className="flex flex-col justify-center h-[100vh]">
      <section className="w-[25rem] h-[30rem] border-[2rem] border-blues rounded-2xl mx-auto "> 
        <div>
          <h2 className="text-center text-2xl mt-4 font-bold text-blue">Tenzies</h2>
          <p className="text-gray-400 px-10 text-center">Roll untill all dice are the same. click each dice to freeze it at its current value between rolls.</p>
        </div>
        <Dice/>
      </section>
    </section>
  )
}
