import Challenge from "./components/Challenge";

const SecretCode = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            Bonjour les filles,
            <p>
                Une soirée pyjama, c'est l'occasion de se dire des secrets, vous allez devoir montrer que vous savez être discrètes !
            </p>
            <p>
                Des lettres donnant le premier code ont été cachées dans l'appartement.<br/>
                Vous possédez chacune une feuille avec un code secret à résoudre pour trouver les différentes
                cachettes<br/>
                <strong>Dépéchez vous !</strong><br/>
            </p>
            <h2>Le code est :</h2>
        </Challenge>
    )
}

export default SecretCode;
