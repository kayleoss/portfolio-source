import React from 'react';
import {artData} from './data.js';
import ArtTile from './ArtTile';

class Art extends React.Component {

    state = {
        art: {
                img: 'festival1.jpg',
                colSize: "col-sm-4 offset-md-4"
            },
        Artindex: 0,
        length: 0
    }

    updateImg = () => {
        if (this.state.Artindex <= this.state.length -1) {
            this.setState({art: artData[this.state.Artindex], Artindex: this.state.Artindex += 1})
        } else {
            this.setState({art: artData[0], Artindex: 0})
        }
    }

    componentDidMount() {
        this.setState({length: artData.length})
        // setInterval(this.updateImg, 3000);
    }
    
    render() {
        return (
            <section className="p-b" id="art">
                <div className="container">
                    <div className="row">
                        {artData.map(art => {
                            return(
                                <ArtTile {...art} />
                            )
                        })}
                        
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Art;
