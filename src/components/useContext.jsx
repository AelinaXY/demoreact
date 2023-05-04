import { useState, createContext, useContext } from "react";

const UserContext = createContext();


const TestUseContext = () => {

    return (
        <Component1/>
    )

}

const  Component1  = () => {
    const [user, setUser] = useState("test");
    
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello${user}`}</h1>
            <Component2/>
        </UserContext.Provider>

    )
}

function Component2() {
    return(
        <>
            <h1>Component 2</h1>
            <Component3/>
        </>
    )
}
function Component3() {
    return(
        <>
            <h1>Component 3</h1>
            <Component4/>
        </>
    )
}
function Component4() {
    return(
        <>
            <h1>Component 4</h1>
            <Component5/>
        </>
    )
}

function Component5() {
    const userValue = useContext(UserContext);
    return(
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${userValue}`}</h2>
        </>
    )
}

export default TestUseContext;