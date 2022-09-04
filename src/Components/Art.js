import React from 'react';
import {artData} from './data.js';
import ArtTile from './ArtTile';

class Art extends React.Component {
    render() {
        return(
            <section className="p-b">
                <div className="container">
                    <div className="text-center">
                        <h1 className="title-h1 wow fadeIn p-t">Digital art</h1>
                        <p className="description-p">Paintings, drawings, webtoons, and other assets available for purchase</p>
                    </div>
                    
                    <div className="row">
                        {artData.map(art => {
                            return (
                                <ArtTile {...art} key={artData.indexOf(art)}/>
                            )
                        })}
                    </div>
                    
                </div>
            </section>
        )
    }
} 

export default Art;
