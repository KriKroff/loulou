import Challenge from "./components/Challenge";

const SecretCode = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            <h2>Bravo les chamallows ! 🍬🍭 </h2>
            <p>
                Ok pour les secrets, on est bon ! <br/>
                Mais une cabane, c'est <strong>fragile</strong>, il faut savoir se déplacer discrètement, telle une petite souris <span className="bigmoji">🐁</span>.<br/>
                Pour cette seconde épreuve, vous n'aurez pas besoin de votre cerveau, mais de toute votre concentration.<br/>
                Effectuez le parcours sans faire tomber votre "oeuf" <span className="bigmoji">🥚</span> et vous obtiendrez le second code.<br/>
                Ninjaaaaaa <span className="bigmoji">🥋</span>
            </p>
        </Challenge>
    )
}

export default SecretCode;
