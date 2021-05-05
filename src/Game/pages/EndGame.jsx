import './pyro.css'

const EndGame = () => {
    return (
        <div>
            <div className="pyro">
                <div className="pyro-before"></div>
                <div className="pyro-after"></div>
            </div>
            <h2>Felicitations !</h2>
            <p>
                Bravo vous avez trouvé le bon code mes cocottes <span className="bigmoji"> 🐔🐤</span> !
            </p>
            <p>
                Mais il vous reste une dernière <strong>ENIGME</strong> !
            </p>
            <p>La clef de la cabane est cachée dans le salon...elle <strong>bloque</strong> une porte</p>
        </div>
    )
}

export default EndGame;
