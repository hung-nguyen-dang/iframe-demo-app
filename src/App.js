import { useState } from 'react';
import './App.css';

function App() {
    const [src, setSrc] = useState('https://iframe-demo-server.herokuapp.com')
    const [url, setUrl] = useState('https://iframe-demo-server.herokuapp.com')
    const handleOnChange = (e) => setUrl(e.target.value)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter URL
        </p>
          <form onSubmit={(e) => {
              e.preventDefault()
              setSrc(url)
          }}
          >
          <input width={400} height={80} name="url" value={url} type="text" onChange={handleOnChange} />
          </form>
        <iframe width={1280} height={480} title="iframe" src={src} />
      </header>
    </div>
  );
}

export default App;
