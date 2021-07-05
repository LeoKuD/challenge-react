import { Switch, Route } from "react-router-dom";
import { Challenge } from "./Challenge";
import { ChallengesList } from "./ChallengesList";
import { NewChallenge } from "./NewChallenge";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={ChallengesList} />
            <Route path='/challenge/:challengeId' component={Challenge} />
            <Route path='/newchallenge' component={NewChallenge} />
        </Switch>
    );
}

export default App;
