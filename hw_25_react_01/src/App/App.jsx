import './App.css';
import React from "react";
import Table from '../components/Table';

const animals = [
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
];

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Table list={animals} />
            </React.Fragment>
        )
    }
}

export default App;
