import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            init: 1
        }
    }

    render() {
        return (
            <div>
                <span>abcdefg</span>
                {this.state.init}
                <span onClick={this.handelAdd}>add</span>
            </div>
        );
    }

    handelAdd = () => {
        this.setState({
            ...this.state,
            init: this.state.init + 1
        }, () => {
            console.log(this.state);
        })
    }
}