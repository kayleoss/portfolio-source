import React from 'react';
import axios from 'axios';
import Loading from '../Loading';
import Post from './Post';

export default class Posts extends React.Component {
    state = {
        loading: true,
        error: false,
        posts: []
    }

    componentDidMount() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@katieliu-7475')
            .then(response => {
                this.setState({ posts: response.data.items, loading: false })
            })
            .catch(response => this.setState({ error: true }));
    }

    render() {
        return (
            <div className="row m-auto pl-3 pr-3">
                {this.state.loading ? <Loading /> :
                    this.state.posts.map((post, i) => {
                        return (<Post {...post} key={i} />)
                    })
                }
                <div className="text-center m-3 w-100"><p>The end. Have a strawberry <span role="img" aria-label="strawberry icon">🍓</span></p></div>
            </div>
        )
    }
}