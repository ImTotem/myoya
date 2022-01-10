import { React, useState } from "react";
import { Loading } from "../components";

function Profile({id, className, profile, name, to, children}) {
    const [loading, setLoading] = useState(true);

    return (
        <section id={id} className={`profile ${className}`}>
            <div id="info" className="center">
                <a href={to} target="_blank" rel="noopener noreferrer" >
                    <img
                        className="circle"
                        src={profile}
                        alt={children}
                        onLoad={() => setLoading(false)}
                    ></img>
                    <div style={{display: loading ? "block" : "none"}}><Loading /></div>
                </a>
                <h1>{name}</h1>
                <a className="shortcut" href={to} target="_blank" rel="noopener noreferrer" >{`${children} 바로가기`}</a>
            </div>
        </section>
    );
}

export default Profile;