import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('/getData').then((res) => {
            setData(res.data.data);
        });
    }, []);
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

const App = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>

        <hr />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    </div>
);

export default App;
