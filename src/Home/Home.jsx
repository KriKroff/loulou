import RainbowButton from "../components/buttons/rainbow/RainbowButton";

const Home = ({onStart}) => {
    return (
        <div>
            <h2>π  π  Bienvenue dans la mission cabane π  π </h2>
            <p>
                La cabane est actuellement πππ fermΓ©e πππ ! <br/>
                <strong>PERSONNE</strong> ne peut rentrer !!! Oh la la π’ π’ π’. <br/>
                La pyjama party ne pourra pas avoir lieu sans trouver la πclΓ© π. 
            </p>
            <p>
                <strong>Votre mission</strong> :
                <ul className="list-no-style">
                    <li>β‘ RΓ©ussir chaque dΓ©fi pour trouver le code secret</li>
                    <li>β‘ Grace Γ  l'Γ©nigme, trouver la clef</li>
                    <li>β‘ S'amuser, Γͺtre une licorne π¦, un panda πΌ, un lapin π</li>
                </ul>
            </p>
            <h3>πππππππ Etes-vous prΓͺtes ??? πππππππ</h3>
            <RainbowButton onClick={onStart}>Commencer !!!</RainbowButton>
        </div>
    )
}

export default Home;
