import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          iFrame app with Content-Security-Policy: frame-ancestors
        </p>
        <iframe src="https://iframe-demo-server.herokuapp.com" />
      </header>
    </div>
  );
}

export default App;
