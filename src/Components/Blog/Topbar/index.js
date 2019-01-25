import React from 'react';

const Topbar = (props) => (
    <div className="topbar p-2 text-center mb-5 projects-bg box-shadow project-img">
        <h2 className="main-h1">{props.title} <span role="img" aria-label="cloud">☁️</span></h2>
    </div>
)

export default Topbar;