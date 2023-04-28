import { useState } from "react"

const InputAdder = () =>

{
    const [counter,setCounter] = useState(0);
    let [historyList,setHistoryList] = useState([]);

    const minusFive = () => {
        addToHistory(counter,5,0);
        setCounter(counter-5);
    } 
    const minusOne = () => {
        addToHistory(counter,1,0);
        setCounter(counter-1);
    }
    const zeroCounter = () => {
        setHistoryList([<p className="historyEntries">Zeroed!</p>,...historyList.slice(0,4)]);
        setCounter(0);
    }
    const addOne = () => {
        addToHistory(counter,1,1);
        setCounter(counter+1);
    }

    const addFive = () => {
        addToHistory(counter,5,1);
        setCounter(counter+5);
    }

    const addToHistory = (count,plus,positive) =>
    {
        console.log("BLaH")
        if(positive === 0)
        {
            setHistoryList([<p className="historyEntries">{count} - {plus} = {count-plus}</p>,...historyList.slice(0,4)])
        }
        if(positive === 1)
        {
            setHistoryList([<p className="historyEntries">{count} + {plus} = {count+plus}</p>,...historyList.slice(0,4)])
        }
    }

    return(
        <>
        <div className="adder">
            <div className="counter">
                <input value={counter}/>

            </div>

            <div className="buttons">
                <button onClick={minusFive}>-5</button>
                <button onClick={minusOne}>-1</button>
                <button onClick={zeroCounter}>0</button>
                <button onClick={addOne}>+1</button>
                <button onClick={addFive}>+5</button>
            </div>
        </div>

        <div className="history">
            <h2>History:</h2>
            <ul>
                {historyList}
            </ul>

        </div>
        
        
        </>
    )
}

export default InputAdder;