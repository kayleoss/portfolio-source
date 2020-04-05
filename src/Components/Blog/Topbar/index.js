import React from 'react';
import {Link} from 'react-router-dom';

const Topbar = (props) => (
    <div className="topbar p-2 text-center mb-5 projects-bg box-shadow project-img">
        <Link to="/" className="legal-text block topbar-absolute">⬅ Back</Link>
        <h1 className="main-h1">{props.title} <span role="img" aria-label="cloud">☁️</span></h1>
    </div>
)

export default Topbar;