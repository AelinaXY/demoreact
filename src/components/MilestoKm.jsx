import { useState } from "react"
import leftPad from "left-pad"

const MilesToKm = () =>

{
    const [miles,setMiles] = useState();
    const [km,setKm] = useState();

    const changeMiles = (e) => {
        const newMiles = e.target.value;
        setMiles(newMiles);
        setKm(newMiles*1.6);
    }

    const changeKm = (e) => {
        const newKm = e.target.value;
        setKm(newKm);
        setMiles(newKm *0.625);
        
    }

    return(
        <>
        <div className="convertor">
            <div className="miles">
                <label>Miles:</label>
                <input value={miles} onChange={changeMiles}/>

            </div>

            <div className="km">
                <label>Kilometers: </label>
                <input value={km} onChange={changeKm}/>
            </div>
        </div>
        
        
        </>
    )
}

export default MilesToKm