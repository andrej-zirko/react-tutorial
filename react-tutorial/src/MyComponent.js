import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
}

const defaultProps = {
    name: 'Andrej (default prop)'
}

class MyComponent extends Component {
    componentWillMount() {
        console.log('WILL MOUNT');
    }

    componentDidMount() {
        console.log('DID MOUNT');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.props, this.state, nextProps, nextState);
    }

    render() {
        const { title, name, onClick } = this.props;

        return (
            <div className="component">
                <h1>Title: {title}</h1>
                <h2>Name: {name}</h2>
                <div onClick={onClick}>Click me</div>                
            </div>
        );
    }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
