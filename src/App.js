import './App.css';
import {useState} from "react";
import Home from "./Home/Home";
import Game from "./Game/Game"

function App() {
    const [started, setStarted] = useState(false);
    return (<div className="App">
        <div className="header">
            <h1>Pyjama party de 🎧 <span className="rainbow-text">Louise</span> 🎧</h1>
        </div>
        <main>
            {!started && <Home onStart={() => setStarted(true)}/>}
            {started && <Game/>}
        </main>
    </div>)
}

export default App;
