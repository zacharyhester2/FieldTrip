import React from 'react';
import * as d3 from 'd3';
import BottomNav from './Components/Navigation/BottomNav.jsx';

const App = () => {

    return (
        <div>
            <>
                <h1>FieldTrip</h1>
                <a className="login-button" href="/auth/google">Log In with Google</a>
            </>
            <BottomNav />
        </div>
    )
}

export default App;