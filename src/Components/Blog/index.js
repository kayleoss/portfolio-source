import React from 'react';
import Topbar from './Topbar';
import Loading from './Loading';
import Posts from './Posts';

export default class Blog extends React.Component {
    state = {
        loading: true
    }
    
    handleLoaded = () => {
        this.setState({loading: false})
    }
    
    render() {
        return (
            <section>
                <Topbar title="thoughts" />
                <div className="container">
                    <p>Whether you're here because you're generally interested in what I have to say or because you stumbled here and don't know how to get back - If you're open to listening, I have more than enough words for this world to hear. Welcome to my blog...</p>
                    {this.state.loading ? <Loading /> : <Posts loaded={this.handleLoaded} />}
                </div>
            </section>
        )
    }
};