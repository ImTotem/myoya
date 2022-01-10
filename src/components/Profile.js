import { React } from "react";

function Profile({id, className, profile, name, to, children}) {
    return (
        <section id={id} className={`profile ${className}`}>
            <div id="info" className="center">
                <a href={to} target="_blank" rel="noopener noreferrer" >
                    <img
                        className="circle"
                        src={profile}
                        alt={children}
                    ></img>
                </a>
                <h1>{name}</h1>
                <a className="shortcut" href={to} target="_blank" rel="noopener noreferrer" >{`${children} 바로가기`}</a>
            </div>
        </section>
    );
}

export default Profile;