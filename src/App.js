import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';

function App() {
    const [src, setSrc] = useState('https://iframe-demo-server.herokuapp.com')
    const [url, setUrl] = useState('https://iframe-demo-server.herokuapp.com')
    const handleOnChange = (e) => setUrl(e.target.value)

    const handleOpenPopup = () => {
        const newWindow=window.open('https://iframe-demo-server.herokuapp.com', 'Test Popup','height=700,width=1280');
        if (window.focus) {
            newWindow.focus()
        }
        return false;
    }
    return (
        <div className="App">
            <Tabs>
                <TabList>
                    <Tab>CSP</Tab>
                    <Tab>Pop-up</Tab>
                </TabList>

                <TabPanel>
                    <p>Enter URL</p>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setSrc(url)
                    }}
                    >
                        <input style={{ fontSize: "1rem" }} width={400} height={80} name="url" value={url} type="text" onChange={handleOnChange} />
                    </form>
                    <iframe width={1280} height={480} title="iframe" src={src} />
                </TabPanel>
                <TabPanel>
                    <button onClick={handleOpenPopup} style={{ fontSize: "1rem", padding: "1rem" }}>
                        OPEN
                    </button>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
