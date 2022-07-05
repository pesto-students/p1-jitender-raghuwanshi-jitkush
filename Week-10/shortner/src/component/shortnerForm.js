//This component constains the input fields and button to enter url to be shortened.
//there is a loader which will be renederd while the data is fetched from the API.
//handle event handles fecting data, assigning it to the state variable url(declared in App.js).

import React , {useState, useEffect} from 'react';

const Form = ({getUrl, inputUrl}) => {
    const [input, setInput] = useState("");
    const [loader, setLoader] = useState(false);

    //handles input onChange event
    const handleChnge = (event) => {
        setInput(event.target.value);
    }
    //handles onSubmit event
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader(true);
        inputUrl(input);
        console.log("entered handlesUBMIT")
        fetch(`https://api.shrtco.de/v2/shorten?url=${input}/very/long/link.html`)
        .then((res) => res.json())
        //data is sent to App.js via "getUrl" props.
        .then((output) => setTimeout(getUrl(output.result.full_short_link),1000))
        .catch((e)=> {console.log(e)})
        setInput("");
    }
  
    useEffect(()=>{
        //to render loader if there is a delay in fecting data or setting the state.
        setLoader(false);
    },[loader])


    return(
        <div> 
           
        { loader ? (
        <>
            <div className='load'></div>
        </>
        ) : (  
        <>
        <div className='urlForm'>
            <form onSubmit={handleSubmit}>
                    <input className='input' type='text' value={input} onChange={handleChnge}></input>
                    <button className='button' type='submit'> Shorten Url</button>
            </form>
        </div>
        </>
        )
        }

        </div>
    )
}


export default Form;