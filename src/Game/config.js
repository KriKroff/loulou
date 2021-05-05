import SecretCode from "./pages/SecretCode";
import Parkour from "./pages/Parkour";
import Cotton from "./pages/Cotton";
import InvisibleCode from "./pages/InvisibleCode";
import Spaghetti from "./pages/Spaghetti";

const gameConfig = {
    code: "85247".split(""),
    challenges: [SecretCode, Parkour, Cotton, InvisibleCode, Spaghetti]
}

export default gameConfig;
