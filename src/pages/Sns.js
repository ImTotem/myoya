import React from "react";
import { Profile } from "../components";

function Sns() {
    return (
        <div className="flex horizontal">
            <Profile id={"twitter"}
                profile={`${process.env.PUBLIC_URL}/assets/images/twitter_profile.png`}
                name={"Myoya🐯🎀"}
                to={"https://twitter.com/myoya_v"}
            >트위터</Profile>

            <Profile id={"instagram"}
                profile={`${process.env.PUBLIC_URL}/assets/images/instagram_profile.png`}
                name={"묘야(@myoya__)"}
                to={"https://instagram.com/myoya__"}
            >인스타그램</Profile>
        </div>
    );
}

export default Sns;