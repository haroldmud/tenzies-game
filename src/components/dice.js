import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Dice(){
  const [collection, setCollection] = useState(provider());

  function diceGenerator(){
    return {number : Math.ceil(Math.random()*6), isHeld:false, id: nanoid()}
  }

  function provider(){
    let Arr = [];
    for(let i=0; i<10;i++){
      Arr.push(diceGenerator());
    }
    return Arr;
  }

  function rollDice(){
    setCollection(dice => dice.map(die => {
      return die.isHeld ? die : diceGenerator()
    }))
  }

  function holdDice(id){
    setCollection(
      oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    })
    )
  }
  function pusher(){
    const newArr = [];
    for(let i=0; i < collection.length; i++){
      if(collection[i].isHeld === true){
        newArr.push(collection[i].number)
      }
    }
    return newArr;
  }
  const again= pusher();
  function equality(){
      for(let i =0; i< again.length;i++){
        if(again[i] !== again[0]){
          return false;
        }
      }
      return true;
    }

  useEffect(()=>{
    console.log(again);
  })
  
  return(
    <section className="relative">
    <div className="flex justify-center h-12 mt-6"> 
    {
         (equality() && again.length === 10) ? <p className={`mx-auto text-green-500 font-bold`}>YOU WON BWAY!!!</p>
        : (equality() === false && again.length === 10) ?  <p className={`mx-auto text-red-500 font-bold`}>YOU LOST </p> : <p className="font-bold">YOU CAN PLAY</p>
    }
        </div>
        <div className="flex justify-center">
        </div>
    <div className=" grid grid-cols-5 w-fit gap-2 mx-auto mt-8">
      {
        collection.map((item, idx)=> 
          <button key={item.id}
            onClick={()=>
              holdDice(item.id)
            }
          className={`text-blue border ${item.isHeld ? "bg-held" : ""} w-fit py-2 px-4 h-fit rounded-xl shadow`}>{item.number}</button>
        )
      }
    </div>{
    again.length === 10 && <div className="top-[5rem] bg-transparent h-[6rem] w-full absolute"></div>
    }
    <div className="w-full  flex justify-center mt-8">
      {
        again.length === 10 ? <button onClick={()=>setCollection(provider())} className="w-fit bg-blue-700 px-3 py-1 rounded text-white font-bold mx-auto">Restart</button> : <button onClick={()=>rollDice()} className="w-fit bg-blue-700 px-3 py-1 rounded text-white font-bold mx-auto">Roll</button>
      }
    </div>
    
    </section>
  )
}
