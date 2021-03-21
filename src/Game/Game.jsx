import {useState} from "react";
import config from "./config";
import EndGame from "./pages/EndGame";

const Game = () => {
    const [step, setStep] = useState(0);
    const Component = config.challenges[step];
    return (<div className="game">
        {step !== config.code.length && Component && <Component code={config.code[step]} onSuccess={() => setStep(step + 1)}/>}
        {step === config.code.length && <EndGame/>}
    </div>)
}

export default Game
