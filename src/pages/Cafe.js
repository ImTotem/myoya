import React from "react";
import { Profile } from "../components";

function Cafe() {
    return (
        <div className="flex horizontal">
            <Profile id={"cafe"}
                profile={`${process.env.PUBLIC_URL}/assets/images/cafe_profile.png`}
                name={"호랑이굴"}
                to={"https://cafe.naver.com/myoyacafe"}
            >공식 펜카페</Profile>
        </div>
    );
}

export default Cafe;