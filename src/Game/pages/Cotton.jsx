import Challenge from "./components/Challenge";

const Cotton = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            <p>
                Très bien les petits dragons <span className="bigmoji">🐉</span><br/>
                Connaissez-vous l'expression "<strong>Le ridicule ne tue pas</strong>" ?<br/>
                Et bien j'espère pour vous, parce que pour découvrir le prochain code, on va rigoler !<br/>
                L'une après l'autre, amenez les cotons de la table à la poubelle et le code se dévoilera !<br/>
                Ca va être moelleuuuuux <span className="bigmoji">🐑</span>
            </p>
        </Challenge>
    )
}

export default Cotton;
