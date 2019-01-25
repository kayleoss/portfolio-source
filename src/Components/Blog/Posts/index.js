import React from 'react';

export default class Posts extends React.Component {
    componentDidMount() {
        console.log("fetch posts here")
        this.props.loaded
    }
    render() {
        return (
            <h1>posts</h1>
        )
    }
}