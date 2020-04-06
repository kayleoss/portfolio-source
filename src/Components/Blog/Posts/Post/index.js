import React from 'react';

const Post = (props) => {
    const date = new Date(props.pubDate);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()]
    return(
        <div className="col-sm-4 border box-shadow">
            <a href={props.link} target='_blank'><p className="description-h m-t" dangerouslySetInnerHTML={{__html: props.title}}></p></a>
            <p className="title-h1">{month + " " + date.getFullYear()}</p>
            <p className="text-secondary content-post" dangerouslySetInnerHTML={{__html: props.content}}></p>
        </div>
    )
    
}

export default Post;