import { propsToAttrMap } from '@vue/shared';
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const ArtTile = (props) => (
    <>
        {props.blank == true ? <div className={props.colSize ? props.colSize + " p-5" : "col-sm-4 p-5"}></div>
            :
            <div className={props.colSize + " p-5"}>
                <div className="wow fadeInUp" data-wow-delay="1s">
                    <img src={require("../assets/" + props.img)} alt="" className="w-100 shadow npe" />
                    <p className="mt-5 text-secondary"><span className="font-weight-bold">
                        {props.title}</span><br />
                        <em>{props.description}</em>
                        <br /><br />
                        Dimensions: {props.dimensions}
                        <br />Format: {props.format}
                        <br />
                        {props.purchaseLink ?
                            <a href={props.purchaseLink} target="_blank" aria-label="Buy now">{props.physical == true? "Buy original artwork" : "Buy digital copy"} for {props.price}</a>
                            :
                            <a href={props.link ? require("../assets/" + props.link) : require("../assets/" + props.img)} target="_blank">View/Download for free</a>
                        }
                    </p>
                </div>
            </div>
        }
    </>
)

export default ArtTile;
