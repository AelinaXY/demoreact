const JSONrender = (JSONprop) => {
    const JSONfile = JSONprop.data;
    const exampleData = JSONfile[0];
    const exampleKeys = Object.keys(exampleData);

    const dataObjectConvertor = (data) => {
        let output = "";
        console.log(data);

        for (const key in data)
        {
            if(typeof data[key] === 'object' && data[key] !== null)
            {
                output += key + ": " + dataObjectConvertor(data[key]);
            }
            else
            {
                output += key + ": " + data[key] + " | \n";
            }
        }
        return output;
        
    }

return (
    <>
        <table>
            <thead>
                <tr>
                    {exampleKeys.map((key) => (

                        <th>{key}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {JSONfile.map((data, index) => (
                    <tr key={index}>
                        {exampleKeys.map((key) => (
                            <td> {typeof data[key] === 'object' && data[key] !== null ? dataObjectConvertor(data[key]) : data[key]}</td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    </>
)
}
export default JSONrender;