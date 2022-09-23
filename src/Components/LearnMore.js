import React from 'react';
import {Link} from 'react-router-dom';
import Art from './Art';

class LearnMore extends React.Component {
    render() {
        return (
            <section className="p-b" id="learnmore">
                <div className="container">
                    <h1 className="title-h1 pt-5 text-center">Get to know me</h1>
                    <div className="row">
                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-12 border shadow learn-more-block p-0">
                                <div className="text-center h-200">
                                    <Link to="/blog" className="learn-more-img h-200"><img src={require("../assets/medium.jpg")} className="w-100" alt="Learn more about me by reading my blog"/></Link>
                                </div>
                                <p className="description-p p-3 mb-0 bg-purple"><span className="label-h1">Blog</span><br />I occasionally write about technology on my <Link to='/blog'>blog</Link>. Posts are pulled from my Medium profile.</p>
                            </div>
                        </div>

                        <div class="modal fade" id="artModal" tabindex="-1" role="dialog" aria-labelledby="ArtworkModal" aria-hidden="true">
                            <div class="modal-dialog modal-lg bg-purple" role="document">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <h3 class="title-h1">Artwork by Katie</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <Art />
                                    </div>
                                    <div class="modal-footer border-0">
                                        <p>Katie &copy; All Rights Reserved {new Date().getFullYear()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-12  shadow border learn-more-block p-0">
                                <div className="text-center h-200">
                                    <a href="#" data-toggle="modal" data-target="#artModal" className="learn-more-img h-200"><img src={require("../assets/festival1.jpg")} className="w-100" alt="Learn more about me by reading my blog"/></a>
                                </div>
                                <p className="description-p p-3 mb-0 bg-purple"><span className="label-h1">Art</span><br />As a hobby I enjoy practicing painting and <a href="#" data-toggle="modal" data-target="#artModal">art</a> which helps me with observation.</p>
                            </div>
                        </div>

                        <div className="col-sm-4 mt-5">
                            <div className="col-sm-12  shadow border learn-more-block p-0">
                                <div className="text-center h-200">
                                    <a href='https://github.com/kayleoss' target="_blank" className="learn-more-img h-200"><img src={require("../assets/code.png")} className="w-100" alt="Learn more about me by reading my blog"/></a>
                                </div>
                                <p className="description-p p-3 mb-0 bg-purple"><span className="label-h1">Github</span><br />Some of the code for past projects I've worked on can be viewed on my <a href='https://github.com/kayleoss' target="_blank">github</a>.</p>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
            </section>
        )
    }
}

export default LearnMore;
