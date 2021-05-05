import Challenge from "./components/Challenge";

const InvisibleCode = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            <p>
                Avez-vous peur du noir ? <br/>
                Le prochain code est caché dans la chambre, mais il n'est visible que dans le noir !<br/>
                Utilisez vos stylos de détective <span className="bigmoji">🔦</span>, 5 lettres sont à trouver, pour obtenir le code
            </p>
        </Challenge>
    )
}

export default InvisibleCode;
