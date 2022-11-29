import './App.css';
import React, {useState} from "react";
import Buttons from "./components/buttons/Buttons";

function App() {
let [balance, setBalance] = useState(0);
const [userInput, setUserInput] = useState("");
const getInput =  event => {
  setUserInput(event.target.value);  
}

function Income() {
  let userInputNumber = Number(userInput);
setBalance(balance + userInputNumber); 
setUserInput("");
}

function Expense() {
  let userInputNumber = Number(userInput)
  setBalance(balance-userInputNumber)
  setUserInput("");
}
  return (
    <div className="App">
      <p className="balanceP">{balance}</p>
      <input type="number" id="amountChange" onChange={getInput} value={userInput}/>
      <button type="button" onClick={Income}>Log Income</button>
      <button type="button" onClick={Expense}>Log Expense</button>
    </div>
  );
}

export default App;
