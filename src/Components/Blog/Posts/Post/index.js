import React from 'react';

const Post = (props) => {
    const date = new Date(props.pubDate);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()]
    return(
        <div className="col-sm-4 p-3 bg-light">
        <h2 className="description-h m-t">{props.title}</h2>
        <p className="title-h1">{month + " " + date.getFullYear()}</p>
        <p className="text-secondary" dangerouslySetInnerHTML={{__html: props.content}}></p>
        {/* <a href={props.link} className="">Read more</a> */}
    </div>
    )
    
}

export default Post;