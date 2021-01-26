import React from 'react';
import Topbar from './Topbar';
import Posts from './Posts';

export default class Blog extends React.Component {
    state = {
        showBackToTop: "invisible"
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 105) {
            this.setState({ showBackToTop: "visible" })
        } else {
            this.setState({ showBackToTop: "invisible" })
        }
    }

    render() {
        return (
            <section id="top">
                <Topbar title="thoughts" />
                <div className="container">
                    <p className="text-center">Welcome to a page full of stuff pulled from my <a href='https://medium.com/@katieliu_7475'>Medium</a>. Enjoy!</p>
                    <hr />
                    <Posts />
                </div>
                <a href="#top" className={"rounded-top p-2 main-p text-center projects-bg text-light fixed-bottom " + this.state.showBackToTop}>Back to top &#8679;</a>
            </section>
        )
    }
};