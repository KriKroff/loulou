import Challenge from "./components/Challenge";

const Spaghetti = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            <p>
                Vous y êtes presque !<br/>
                Il ne reste plus qu'un défi à remplir. <br/>
                Dans une cabane, on est une famille, le travail d'équipe sera donc important !
            </p>
        </Challenge>
    )
}

export default Spaghetti;
