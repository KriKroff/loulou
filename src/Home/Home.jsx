import RainbowButton from "../components/buttons/rainbow/RainbowButton";

const Home = ({onStart}) => {
    return (
        <div>
            <h2>🏠 🏠 Bienvenue dans la mission cabane 🏠 🏠</h2>
            <p>
                La cabane est actuellement 🔒🔒🔒 fermée 🔒🔒🔒 ! <br/>
                <strong>PERSONNE</strong> ne peut rentrer !!! Oh la la 😢 😢 😢. <br/>
                La pyjama party ne pourra pas avoir lieu sans trouver la 🔑clef🔑. 
            </p>
            <p>
                <strong>Votre mission</strong> :
                <ul>
                    <li>Réussir chaque défi pour trouver le code secret</li>
                    <li>Grace à l'énigme, trouver la clef</li>
                    <li>S'amuser, être une licorne 🦄, un panda 🐼, un lapin 🐇</li>
                </ul>
            </p>
            <h3>💙💙💙💙💙💙💙 Etes-vous prêtes ??? 💙💙💙💙💙💙💙</h3>
            <RainbowButton onClick={onStart}>Commencer !!!</RainbowButton>
        </div>
    )
}

export default Home;
