import { useState } from "react";
import leftPad from "left-pad";

const Dice = () => {
    const rollMax = 20;
    const [num,setNum] = useState(Math.ceil(Math.random() * rollMax));

    const roll = () =>
    {
        console.log(num);
        setNum((m) => (Math.ceil(Math.random() * rollMax)))
    }


    return(
    <p id="Dice" onClick={roll}>Roll a D20: {leftPad(num,2,0)}</p>
    );
}

export default Dice;