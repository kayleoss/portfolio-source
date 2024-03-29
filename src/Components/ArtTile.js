import React from 'react';
import '../App.css';

const ArtTile = (props) => (
    <>
    <div className={props.colSize ? props.colSize + " p-md-3" : "p-md-3"}>
        <a href={require("../assets/" + props.img)} target="_blank" className="artTileImg d-inline-block" data-wow-delay="1s">
            <img src={require("../assets/" + props.img)} alt="" className="w-100 shadow mt-3 mt-md-0" />
        </a>
    </div>
    </>
)

export default ArtTile;
