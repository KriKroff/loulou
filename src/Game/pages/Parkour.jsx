import Challenge from "./components/Challenge";

const SecretCode = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            Parkour
        </Challenge>
    )
}

export default SecretCode;
