import React from 'react';

const Post = (props) => {
    const date = new Date(props.pubDate.split(" ")[0]);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()]
    const videos = ["https://medium.com/media/ea38ffc44cffc251dc54494f821bac41/href"]

    let post;
    videos.map(video => {
        if (props.content.includes(video)) {
            return post = 
            <div className={"bg-light border box-shadow " + props.column}>
                <a href={props.link} target='_blank'><p className="description-h m-t" dangerouslySetInnerHTML={{__html: props.title}}></p></a>
                <p className="title-h1">{month + " " + date.getFullYear()}</p>
                <iframe title={"Embed video from katie medium " + video} width={props.column === "col-sm-6" ? "450" : "300"} height="315" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        } else {
            return post = 
            <div className={"bg-light border box-shadow " + props.column}>
                <a href={props.link} target='_blank'><p className="description-h m-t" dangerouslySetInnerHTML={{__html: props.title}}></p></a>
                <p className="title-h1">{month + " " + date.getFullYear()}</p>
                <p className="text-secondary content-post" dangerouslySetInnerHTML={{__html: props.content}}></p>
            </div> 
        }
    })
    return post
}

export default Post;