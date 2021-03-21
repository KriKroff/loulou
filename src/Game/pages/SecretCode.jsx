import Challenge from "./components/Challenge";

const SecretCode = ({code, onSuccess}) => {
    return (
        <Challenge code={code} onSuccess={onSuccess}>
            Bonjour mes pouets
        </Challenge>
    )
}

export default SecretCode;
