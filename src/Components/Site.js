import React from 'react';

const Site = (props) => {
    const imgClass = props.imgClass ? props.imgClass : "";
    const colClass = props.colClass ? props.colClass: "col-sm-6 p-t"
    return (
        <div className={colClass + " mt-sm-5"}>
            {props.href ?
            <div className="bg-white border-round light-shadow overflow-hide mt-sm-5">
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    <img className={"w-100 " + imgClass} src={require(`../assets/${props.imgSrc}`)} alt={props.imgAlt} />
                </a>
                <div className="p-3">
                    <a href={props.href} target="_blank" rel="noopener noreferrer"><h2 className="overlay-h1">{props.title}</h2></a>
                    {props.warningText ? <p className="text-danger">{props.warningText}</p> : ""}
                    <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
                </div>
            </div>
            :
                ""
            }
        </div>
    )

}

export default Site;