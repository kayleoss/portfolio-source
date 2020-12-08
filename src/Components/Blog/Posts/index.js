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
            this.setState({posts: response.data.items, loading: false})
        })
        .catch(response => this.setState({error: true}));
    }
    
    render() {
        return (
            <div className="row mb-5 mt-5 bg-light">
                {this.state.loading ? <Loading /> : 
                    this.state.posts.map((post,i) => {
                        let column;
                        if ( (i%5 === 0 ) || (i%6 === 0) || (i===1) ) {
                            column = 'col-sm-6';
                        } else {
                            column = 'col-sm-4';
                        }
                        return (<Post {...post} key={i} column={column} />)
                    })
                }
            </div>
        )
    }
}