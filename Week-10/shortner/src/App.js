//App js module contains two state varibale; url for the shorten url
//loNGuRL for the original url. there is a input box which displays the shorten url
//which has conditional rendering applied
import { useState } from 'react';
import './App.css';
import Form from './component/shortnerForm';


function App() {
  const [url, setUrl] = useState("");
  const [longUrl, setLongUrl] =useState("");

  console.log(url);
  return(
    <div className='container'>
      <header>URLShortner</header>
      <div className='urlTitle'>Enter url</div>
      <Form getUrl={setUrl} inputUrl={setLongUrl} />
      <div className='output'>
        <div className='inner'>
         LongUrl:<div className="longurl">{longUrl}</div> 
        { url ?
        <input className='outputBox' value={url}/> : <input className='outputBox' placeholder='short url'/>
        }
        </div>
      </div>
      <footer></footer>
    </div>
  )
}

export default App;
