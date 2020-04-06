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
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@katieliu_7475')
        .then(response => {
            this.setState({posts: response.data.items, loading: false})
            console.log(response.data.items)
        })
        .catch(response => this.setState({error: true}));
    }
    render() {
        return (
            <div className="row mb-5 mt-5 border bg-light">
                {this.state.loading ? <Loading /> : 
                    this.state.posts.map(post => {
                        return (<Post {...post} key={this.state.posts.indexOf(post)} />)
                    })
                }
            </div>
        )
    }
}