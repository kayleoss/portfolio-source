import React from 'react';

const Site = (props) => {
    const imgClass = props.imgClass ? props.imgClass : "";
    return (
        <div className="col-sm-6 p-t">
            {props.href ?
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    <div className="overlay" onMouseOver={props.mouseOverAction} onMouseLeave={props.mouseLeaveAction}>
                        <h2 className="overlay-h1">{props.title}</h2>
                        {props.warningText ? <p className="text-danger">{props.warningText}</p> : ""}
                        <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
                    </div>
                    <img className={"project-img " + imgClass} src={require(`../assets/${props.imgSrc}`)} alt={props.imgAlt} />
                </a>
                :
                <div>
                    <div className="overlay" onMouseOver={props.mouseOverAction} onMouseLeave={props.mouseLeaveAction}>
                        <h2 className="overlay-h1">{props.title}</h2>
                        {props.warningText ? <p className="text-danger">{props.warningText}</p> : ""}
                        <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
                    </div>
                    <img className={"project-img " + imgClass} src={require(`../assets/${props.imgSrc}`)} alt={props.imgAlt} />
                </div>
            }
        </div>
    )

}

export default Site;