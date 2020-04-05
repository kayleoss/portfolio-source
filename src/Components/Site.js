import React from 'react';

const Site = (props) => (
    <div className="col-sm-6 p-t">
        <a href={props.href ? props.href : ''} target="_blank" rel="noopener noreferrer">
        <div className="overlay"onMouseOver={props.mouseOverAction} onMouseLeave={props.mouseLeaveAction}>
            <h2 className="overlay-h1">{props.title}</h2>
            {props.warningText ? <p className="text-danger">{props.warningText}</p> : ""}
            <p dangerouslySetInnerHTML={{__html: props.description}}></p>
        </div>
        <img className="project-img" src={require(`../assets/${props.imgSrc}`)} alt={props.imgAlt} />
        </a>
    </div>
)

export default Site;