const ComponentsWithProps = (props) =>
{

    return(
        <>
        <h1>Header: {props.header}</h1>
        <p>Content: {props.content}</p>
        <p>Numb: {props.number}</p>
        <p>Nonexistence: {props.nonexistent}</p>
        </>
    )

}

export default ComponentsWithProps;