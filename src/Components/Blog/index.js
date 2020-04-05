import React from 'react';
import Topbar from './Topbar';
import Posts from './Posts';

export default class Blog extends React.Component {
    
    render() {
        return (
            <section>
                <Topbar title="thoughts" />
                <div className="container">
                    <p className="text-center">Welcome to a page full of my thoughts. Posts are pulled from my <a href='https://medium.com/@katieliu_7475'>Medium</a> page. Enjoy!</p>
                    <hr />
                    <Posts />
                </div>
            </section>
        )
    }
};