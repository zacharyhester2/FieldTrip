import React, {useState} from 'react';
import axios from 'axios';
import * as d3 from 'd3';

const App = () => {
    const [user, setUser] = useState();




    return (
        <div>
            <h1>FieldTrip</h1>
            <a className="login-button" href="/auth/google">Log In with Google</a>
        </div>
    )
}

export default App;