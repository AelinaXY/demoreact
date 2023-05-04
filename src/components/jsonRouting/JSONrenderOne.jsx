const JSONrenderOne = (JSONprop) => {
    const JSONfile = JSONprop.data;

    const dataObjectConvertor = (data) => {
        let output = "";
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
    {dataObjectConvertor(JSONfile)}
    </>
)
}
export default JSONrenderOne;