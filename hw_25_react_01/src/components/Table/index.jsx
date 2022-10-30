import React from 'react';
import {getRandomInt} from '../Util/index';
import './style.css';

export class Table extends React.Component {
    constructor(props) {
        super(props);

        const activateItems = setInterval(() => {
            let randomIndex = getRandomInt(0, this.state.listIndex.length);
            let randomItem = this.state.listIndex[randomIndex];
            console.log(`RandomIndex ${randomIndex} , RandomItem ${randomItem}`);

            this.state.list[randomItem].active = true;

            console.log(this.state.list[randomItem], this.state.listIndex);

            this.state.listIndex.splice(randomIndex, 1);

            if (this.state.listIndex.length === Math.floor(this.state.list.length / 2)) {
                this.state.borderWidth = `10px`;
            }

            if (!this.state.listIndex.length) {
                clearInterval(activateItems);
                this.state.borderWidth = `20px`;
            }

            this.setState({});
        }, 2000);
        console.log(this.state);
    }

    state = {
        list: this.props.list ? this.props.list : [],
        listIndex: Object.keys(this.props.list),
        styleItem: {},
        borderWidth: 0,
    };

    render() {
        return (
            <table style={{ borderWidth: this.state.borderWidth }}>
                <tbody>
                {this.state.list.map((item, index) => (
                    <tr className={item.active && "active"} key={index}>
                        <td>{item.type}</td>
                        <td>{item.icon}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
export default Table;