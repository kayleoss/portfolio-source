import React from 'react';
import {artData} from './data.js';
import ArtTile from './ArtTile';

class Art extends React.Component {
    render() {
        return(
            <section className="p-b" id="art">
                <div className="container">
                    <div className="text-center">
                        <h1 className="title-h1 p-t">Artwork</h1>
                        <small className="description-p">All prices in CAD. Shipping to Canada only</small>
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
