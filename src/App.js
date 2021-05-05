import './App.css';
import {useState} from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"

function App() {
    const [started, setStarted] = useState(false);
    return (<div className="App">
        <div className="header">
            <h1><span className="rainbow-text">Pyjama party de </span> 🎧 <span className="rainbow-text-name">Louise</span> 🎧</h1>
        </div>
        <main>
            {!started && <Home onStart={() => setStarted(true)}/>}
            {started && <Game/>}
        </main>
    </div>)
}

export default App;
