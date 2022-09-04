import React from 'react';
import {artData} from './data.js';
import ArtTile from './ArtTile';

class Art extends React.Component {
    render() {
        return(
            <section className="p-b" id="art">
                <div className="container">
                    <div className="text-center">
                        <h1 className="title-h1 wow fadeIn p-t">Art for sale</h1>
                        <p className="description-p">Buy a full-resolution digital copy of the  artwork</p>
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
