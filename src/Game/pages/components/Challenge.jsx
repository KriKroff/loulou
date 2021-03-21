import {useState} from "react";
import './challenge.css'
import Confetti from "react-confetti";

const numbers = [...Array(10).keys()].map(x => "" + x);

const Challenge = ({code, onSuccess, children}) => {
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);
    const verify = (x) => {
        console.log(errors);
        if (x === code) {
            setSuccess(true);
            setTimeout(() => onSuccess(), 5000);
        } else {
            setErrors([...errors, x]);
        }
    }
    return (<div className="challenge">
            <div className="challenge-body">
                {children}
            </div>
            {
                success && <Confetti/>
            }
            <div className="challenge-answer">
                {errors.length > 0 && <p className="challenge-error">Erreur ! Ce n'est pas le bon code !</p>}
                <div className="challenge-numbers">
                    {numbers.map(x => (
                        <a
                            key={x}
                            type="button"
                            onClick={() => verify(x)}
                            className={`challenge-number ${errors.indexOf(x) > -1 ? "error" : ""}`}
                        >
                            {x}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Challenge;
