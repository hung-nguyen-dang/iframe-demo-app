import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';

function App() {
    const [src, setSrc] = useState('https://thor-demo-hub.herokuapp.com')
    const [url, setUrl] = useState('https://thor-demo-hub.herokuapp.com')
    const handleOnChange = (e) => setUrl(e.target.value)

    const handleOpenPopup = () => {
        const newWindow=window.open('https://thor-demo-hub.herokuapp.com', 'Test Popup','height=700,width=1280');
        if (window.focus) {
            newWindow.focus()
        }
        return false;
    }
    return (
        <div className="App">
            <Tabs style={{ margin: "32px" }}>
                <TabList>
                    <Tab>Option1: iFrame</Tab>
                    <Tab>Option2: Pop-up</Tab>
                </TabList>

                <TabPanel style={{ padding: 20 }}>
                    <p><a rel="noreferrer" target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options'>X-Frame-Options</a> header don't have enough directive to allowing/blocking origins</p>
                    <p>Using header: <a rel="noreferrer" target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy'>
                        Content-Security-Policy </a><br/>
                        <pre>Content-Security-Policy: frame-ancestors https://thor-demo-saleforce.herokuapp.com</pre>
                    </p>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setSrc(url)
                    }}
                    >
                        <label>iFrame URL </label>
                        <input style={{ fontSize: "1rem", marginBottom: "16px" }} width={400} height={80} name="url" value={url} type="text" onChange={handleOnChange} />
                    </form>
                    <iframe width={1280} height={480} title="iframe" src={src} />
                </TabPanel>
                <TabPanel style={{ padding: 20 }}>
                    <button onClick={handleOpenPopup} style={{ fontSize: "1rem", padding: "1rem" }}>
                        OPEN
                    </button>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
